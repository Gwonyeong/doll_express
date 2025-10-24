# 토스 앱인토스(AppinToss) AIT 파일 빌드 후 흰 화면 문제 해결 가이드

## 문제 상황
- 토스 샌드박스 앱에서 개발 환경에서는 정상 작동
- AIT 파일 빌드 후 앱인토스에 등록하면 흰 화면만 표시

## 해결한 변경사항

### 1. Next.js 정적 빌드 설정 추가
```typescript
// next.config.ts
output: 'export',           // 정적 HTML 빌드
basePath: '',               // 기본 경로 설정
assetPrefix: './',          // 상대 경로로 assets 로드
trailingSlash: true,        // 경로에 슬래시 추가
```

### 2. 빌드 스크립트 수정
```json
// package.json
"ait:build": "npm run build:static && npm run ait:bundle",
"build:static": "next build && next export",
"ait:bundle": "mkdir -p dist && cp -r out/* dist/ && cp ait.config.json dist/ && cp manifest.json dist/",
```

### 3. AIT 설정 파일 Entry Point 수정
```json
// ait.config.json
"entry": "./index.html"  // 루트 경로에서 index.html로 변경
```

### 4. 에러 바운더리 추가
- `_app.tsx`: 에러 처리 컴포넌트 생성
- 토스 앱으로 에러 리포팅 기능 포함

### 5. WebView 호환성 개선
- `webview-polyfill.js`: 구형 안드로이드 웹뷰 지원
- `toss-bridge-init.js`: 토스 브릿지 초기화 스크립트
- CSP(Content Security Policy) 헤더 추가

### 6. Hydration 문제 해결
- `suppressHydrationWarning` 속성 추가
- 클라이언트 사이드 환경 체크 강화

## 테스트 방법

### 1. 로컬 빌드 테스트
```bash
cd doll-catcher-landing
yarn ait:build
```

### 2. 빌드 결과 확인
```bash
ls -la dist/
# index.html 파일이 있는지 확인
# _next 폴더가 있는지 확인
```

### 3. 로컬 서버로 테스트
```bash
cd dist
python3 -m http.server 8000
# 브라우저에서 http://localhost:8000 접속
```

### 4. 콘솔 로그 확인
브라우저 개발자 도구에서 다음 메시지 확인:
- `[TossBridge] Initializing...`
- `[Polyfill] WebView environment initialized`

## 추가 디버깅 방법

### 1. Android Studio Logcat 확인
```
adb logcat | grep -i "webview\|chrome\|javascript"
```

### 2. 원격 디버깅 활성화
Chrome에서 `chrome://inspect` 접속하여 WebView 디버깅

### 3. 에러 로그 수집
앱 실행 시 발생하는 JavaScript 에러는 자동으로 토스 앱에 리포팅됨

## 주의사항

1. **NODE_ENV 설정**: 빌드 시 `NODE_ENV=production` 설정 확인
2. **정적 파일 경로**: 모든 정적 파일은 상대 경로로 참조
3. **API 호출**: 외부 API 호출 시 CORS 정책 확인
4. **웹뷰 버전**: Android 5.0 이상 지원 (Chrome WebView 필요)

## 문제가 계속되는 경우

1. **네트워크 탭 확인**: 404 에러가 발생하는 리소스 확인
2. **콘솔 에러**: JavaScript 에러 메시지 확인
3. **토스 고객센터**: 앱인토스 기술 지원 문의

## 참고 자료
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [토스 앱인토스 개발 가이드](https://developers-apps-in-toss.toss.im)