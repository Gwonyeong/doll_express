const https = require('https');
const { decryptTossUserInfo, isTokenExpired } = require('./crypto');
const { prisma } = require('./prisma');

/**
 * 토스 인가 코드를 사용하여 액세스 토큰을 발급받습니다.
 * @param {string} authCode 토스에서 받은 인가 코드
 * @returns {Promise<Object>} 토큰 응답
 */
async function getTossToken(authCode) {
  const data = new URLSearchParams({
    grant_type: 'authorization_code',
    client_id: process.env.TOSS_CLIENT_ID,
    client_secret: process.env.TOSS_CLIENT_SECRET,
    code: authCode,
    redirect_uri: process.env.TOSS_REDIRECT_URI
  });

  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'oauth2.toss.im',
      port: 443,
      path: '/token',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': data.toString().length
      }
    };

    const req = https.request(options, (res) => {
      let responseData = '';

      res.on('data', (chunk) => {
        responseData += chunk;
      });

      res.on('end', () => {
        try {
          const tokenResponse = JSON.parse(responseData);
          if (res.statusCode === 200) {
            resolve(tokenResponse);
          } else {
            reject(new Error(tokenResponse.error_description || '토큰 발급 실패'));
          }
        } catch (error) {
          reject(new Error('토큰 응답 파싱 실패'));
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.write(data.toString());
    req.end();
  });
}

/**
 * 토스 액세스 토큰을 사용하여 사용자 정보를 가져옵니다.
 * @param {string} accessToken 토스 액세스 토큰
 * @returns {Promise<Object>} 사용자 정보 응답
 */
async function getTossUserInfo(accessToken) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'oauth2.toss.im',
      port: 443,
      path: '/api/v2/user/me',
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Accept': 'application/json'
      }
    };

    const req = https.request(options, (res) => {
      let responseData = '';

      res.on('data', (chunk) => {
        responseData += chunk;
      });

      res.on('end', () => {
        try {
          const userInfoResponse = JSON.parse(responseData);
          if (res.statusCode === 200) {
            resolve(userInfoResponse);
          } else {
            reject(new Error('사용자 정보 가져오기 실패'));
          }
        } catch (error) {
          reject(new Error('사용자 정보 응답 파싱 실패'));
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.end();
  });
}

/**
 * 토스 인증 과정을 처리하고 사용자를 생성/업데이트합니다.
 * @param {string} authCode 토스 인가 코드
 * @returns {Promise<Object>} 사용자 정보와 토큰
 */
async function processTossAuth(authCode) {
  try {
    // 1. 토큰 발급
    const tokenResponse = await getTossToken(authCode);

    // 2. 사용자 정보 가져오기
    const userInfoResponse = await getTossUserInfo(tokenResponse.access_token);

    if (userInfoResponse.resultType !== 'SUCCESS') {
      throw new Error('토스 사용자 정보 조회 실패');
    }

    // 3. 암호화된 사용자 정보 복호화
    const encryptionKey = process.env.NEXT_PUBLIC_CRYPTO_SECRET_KEY;
    if (!encryptionKey) {
      throw new Error('암호화 키가 설정되지 않았습니다.');
    }

    const decryptedUserInfo = decryptTossUserInfo(userInfoResponse.success, encryptionKey);

    // 4. 데이터베이스에서 사용자 확인/생성
    const tossId = decryptedUserInfo.id;
    const ci = decryptedUserInfo.ci;

    let user = await prisma.user.findUnique({
      where: { tossId }
    });

    if (!user) {
      // 새 사용자 생성
      user = await prisma.user.create({
        data: {
          tossId,
          nickname: decryptedUserInfo.nickname,
          email: decryptedUserInfo.email,
          name: decryptedUserInfo.name,
          phone: decryptedUserInfo.phone,
          birthday: decryptedUserInfo.birthday,
          gender: decryptedUserInfo.gender,
          ci,
          di: decryptedUserInfo.di,
        }
      });
    } else {
      // 기존 사용자 정보 업데이트
      user = await prisma.user.update({
        where: { id: user.id },
        data: {
          nickname: decryptedUserInfo.nickname,
          email: decryptedUserInfo.email,
          name: decryptedUserInfo.name,
          phone: decryptedUserInfo.phone,
          birthday: decryptedUserInfo.birthday,
          gender: decryptedUserInfo.gender,
          ci,
          di: decryptedUserInfo.di,
        }
      });
    }

    return {
      user: {
        id: user.id,
        tossId: user.tossId,
        nickname: user.nickname,
        email: user.email,
        avatar: user.avatar
      },
      accessToken: tokenResponse.access_token
    };

  } catch (error) {
    console.error('토스 인증 처리 오류:', error);
    throw error;
  }
}

/**
 * 토스 액세스 토큰으로 세션을 검증합니다.
 * @param {string} accessToken 토스 액세스 토큰
 * @returns {Promise<Object|null>} 사용자 정보 또는 null
 */
async function validateTossSession(accessToken) {
  try {
    // 토큰 만료 확인
    if (isTokenExpired(accessToken)) {
      return null;
    }

    // 토스 API로 토큰 유효성 확인
    const userInfoResponse = await getTossUserInfo(accessToken);

    if (userInfoResponse.resultType !== 'SUCCESS') {
      return null;
    }

    // 암호화된 사용자 정보 복호화
    const encryptionKey = process.env.NEXT_PUBLIC_CRYPTO_SECRET_KEY;
    const decryptedUserInfo = decryptTossUserInfo(userInfoResponse.success, encryptionKey);

    // 데이터베이스에서 사용자 확인
    const user = await prisma.user.findUnique({
      where: { tossId: decryptedUserInfo.id }
    });

    if (!user) {
      return null;
    }

    return {
      id: user.id,
      tossId: user.tossId,
      nickname: user.nickname,
      email: user.email,
      avatar: user.avatar
    };

  } catch (error) {
    console.error('세션 검증 오류:', error);
    return null;
  }
}

module.exports = {
  getTossToken,
  getTossUserInfo,
  processTossAuth,
  validateTossSession
};