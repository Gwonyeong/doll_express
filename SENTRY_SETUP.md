# Sentry 설정 가이드

## 개요
토스 Apps in Toss 문서를 기반으로 DollCatcher 프로젝트에 Sentry 에러 모니터링을 설정했습니다.

## 설정 완료 사항

### 1. 패키지 설치
```bash
yarn add @sentry/nextjs
```

### 2. 설정 파일 생성
- `sentry.client.config.ts` - 클라이언트 사이드 설정
- `sentry.server.config.ts` - 서버 사이드 설정
- `sentry.edge.config.ts` - Edge Runtime 설정
- `src/lib/sentry.ts` - Sentry 헬퍼 함수

### 3. 주요 기능
- **에러 바운더리**: `SentryErrorBoundary` 컴포넌트로 전역 에러 처리
- **네이티브 기능 비활성화**: 토스 웹뷰 환경에 맞춰 `enableNative: false` 설정
- **수동 소스맵 업로드**: 빌드 후 별도로 소스맵 업로드

### 4. 환경변수 설정
`.env` 파일에 다음 변수들을 추가해야 합니다:
```env
NEXT_PUBLIC_SENTRY_DSN=YOUR_SENTRY_DSN_HERE
SENTRY_ORG=your-org-name
SENTRY_PROJECT=dollcatcher
SENTRY_AUTH_TOKEN=YOUR_SENTRY_AUTH_TOKEN_HERE
```

## 사용 방법

### 1. Sentry 계정 설정
1. [Sentry.io](https://sentry.io)에서 계정 생성
2. 새 프로젝트 생성 (React 선택)
3. DSN 복사하여 환경변수에 설정

### 2. 에러 테스트
```bash
# 개발 서버 실행
yarn dev

# 테스트 API 호출
curl http://localhost:3000/api/sentry-test
```

### 3. 프로덕션 배포
```bash
# 빌드
yarn build

# 소스맵 업로드 (배포 후 실행)
./scripts/upload-sourcemap.sh
```

## 헬퍼 함수 사용

### 에러 리포팅
```typescript
import { reportError } from '@/lib/sentry';

try {
  // 코드 실행
} catch (error) {
  reportError(error as Error, {
    context: '추가 정보'
  });
}
```

### 사용자 정보 설정
```typescript
import { setSentryUser, clearSentryUser } from '@/lib/sentry';

// 로그인 시
setSentryUser({
  id: 'user123',
  email: 'user@example.com'
});

// 로그아웃 시
clearSentryUser();
```

### 커스텀 이벤트 추적
```typescript
import { trackEvent } from '@/lib/sentry';

trackEvent('매장_검색', {
  keyword: '강남',
  resultCount: 10
});
```

## 토스 Apps in Toss 특별 고려사항

1. **JavaScript 에러만 추적 가능**: 네이티브 에러는 추적되지 않음
2. **수동 소스맵 업로드**: 자동 업로드 대신 배포 후 수동으로 업로드
3. **enableNative: false 설정 필수**: 토스 웹뷰 환경 호환성

## 트러블슈팅

### 에러가 Sentry에 나타나지 않을 때
1. DSN이 올바르게 설정되었는지 확인
2. 개발 환경에서 콘솔 로그 확인
3. 네트워크 탭에서 Sentry 요청 확인

### 소스맵 업로드 실패 시
1. `SENTRY_AUTH_TOKEN` 권한 확인
2. 조직명과 프로젝트명 확인
3. 빌드 파일 존재 여부 확인

## 참고 문서
- [토스 Apps in Toss Sentry 가이드](https://developers-apps-in-toss.toss.im/learn-more/sentry-monitoring.html)
- [Sentry Next.js 문서](https://docs.sentry.io/platforms/javascript/guides/nextjs/)