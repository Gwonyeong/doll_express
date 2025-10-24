const express = require("express");
const https = require("https");
const router = express.Router();

// Toss 토큰 생성 프록시 엔드포인트
router.post("/generate-token", async (req, res) => {
  const { authorizationCode, referrer } = req.body;

  try {
    // 환경 변수에서 인증서 읽기
    const cert = process.env.TOSS_CERT;
    const key = process.env.TOSS_PRIVATE;

    if (!cert || !key) {
      return res.status(500).json({
        success: false,
        error: "Toss 인증서가 설정되지 않았습니다.",
      });
    }

    const postData = JSON.stringify({
      authorizationCode,
      referrer,
    });

    const options = {
      hostname: "apps-in-toss-api.toss.im",
      path: "/api-partner/v1/apps-in-toss/user/oauth2/generate-token",
      method: "POST",
      cert: cert,
      key: key,
      rejectUnauthorized: true,
      headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(postData),
      },
    };

    // Promise로 감싸서 async/await 사용 가능하게 만들기
    const response = await new Promise((resolve, reject) => {
      const req = https.request(options, (httpsRes) => {
        let data = "";

        httpsRes.on("data", (chunk) => {
          data += chunk;
        });

        httpsRes.on("end", () => {
          try {
            const parsedData = JSON.parse(data);
            resolve({
              statusCode: httpsRes.statusCode,
              data: parsedData,
            });
          } catch (error) {
            reject(new Error("응답 파싱 실패: " + data));
          }
        });
      });

      req.on("error", (error) => {
        console.error("Toss API 호출 에러:", error);
        reject(error);
      });

      req.write(postData);
      req.end();
    });

    // Toss API 응답을 클라이언트에 전달
    if (response.statusCode === 200) {
      res.json({
        success: true,
        data: response.data,
      });
    } else {
      res.status(response.statusCode).json({
        success: false,
        error: response.data,
      });
    }
  } catch (error) {
    console.error("Toss API 호출 에러:", error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// Toss 토큰 재발급 프록시 엔드포인트
router.post("/refresh-token", async (req, res) => {
  const { refreshToken } = req.body;

  try {
    // 환경 변수에서 인증서 읽기
    const cert = process.env.TOSS_CERT;
    const key = process.env.TOSS_PRIVATE;

    if (!cert || !key) {
      return res.status(500).json({
        success: false,
        error: "Toss 인증서가 설정되지 않았습니다.",
      });
    }

    if (!refreshToken) {
      return res.status(400).json({
        success: false,
        error: "refreshToken이 필요합니다.",
      });
    }

    const postData = JSON.stringify({
      refreshToken,
    });

    const options = {
      hostname: "apps-in-toss-api.toss.im",
      path: "/api-partner/v1/apps-in-toss/user/oauth2/refresh-token",
      method: "POST",
      cert: cert,
      key: key,
      rejectUnauthorized: true,
      headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(postData),
      },
    };

    // Promise로 감싸서 async/await 사용 가능하게 만들기
    const response = await new Promise((resolve, reject) => {
      const req = https.request(options, (httpsRes) => {
        let data = "";

        httpsRes.on("data", (chunk) => {
          data += chunk;
        });

        httpsRes.on("end", () => {
          try {
            const parsedData = JSON.parse(data);
            resolve({
              statusCode: httpsRes.statusCode,
              data: parsedData,
            });
          } catch (error) {
            reject(new Error("응답 파싱 실패: " + data));
          }
        });
      });

      req.on("error", (error) => {
        reject(error);
      });

      req.write(postData);
      req.end();
    });

    // Toss API 응답을 클라이언트에 전달
    if (response.statusCode === 200) {
      res.json({
        success: true,
        data: response.data,
      });
    } else {
      res.status(response.statusCode).json({
        success: false,
        error: response.data,
      });
    }
  } catch (error) {
    console.error("Toss refresh token API 호출 에러:", error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// Toss 사용자 정보 조회 프록시 엔드포인트
router.get("/user-info", async (req, res) => {
  try {
    // Authorization 헤더에서 Bearer 토큰 추출
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        error: "Bearer 토큰이 필요합니다.",
      });
    }

    const accessToken = authHeader.substring(7); // "Bearer " 제거

    // 환경 변수에서 인증서 읽기
    const cert = process.env.TOSS_CERT;
    const key = process.env.TOSS_PRIVATE;

    if (!cert || !key) {
      return res.status(500).json({
        success: false,
        error: "Toss 인증서가 설정되지 않았습니다.",
      });
    }

    const options = {
      hostname: "apps-in-toss-api.toss.im",
      path: "/api-partner/v1/apps-in-toss/user/oauth2/login-me",
      method: "GET",
      cert: cert,
      key: key,
      rejectUnauthorized: true,
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    };

    // Promise로 감싸서 async/await 사용 가능하게 만들기
    const response = await new Promise((resolve, reject) => {
      const req = https.request(options, (httpsRes) => {
        let data = "";

        httpsRes.on("data", (chunk) => {
          data += chunk;
        });

        httpsRes.on("end", () => {
          try {
            const parsedData = JSON.parse(data);
            resolve({
              statusCode: httpsRes.statusCode,
              data: parsedData,
            });
          } catch (error) {
            reject(new Error("응답 파싱 실패: " + data));
          }
        });
      });

      req.on("error", (error) => {
        reject(error);
      });

      req.end();
    });

    // Toss API 응답을 클라이언트에 전달
    if (response.statusCode === 200) {
      res.json({
        success: true,
        data: response.data,
      });
    } else {
      res.status(response.statusCode).json({
        success: false,
        error: response.data,
      });
    }
  } catch (error) {
    console.error("Toss user info API 호출 에러:", error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

module.exports = router;
