# 토스 앱인토스 AIT 파일 흰 화면 문제 최종 해결 방법

## 문제 원인
1. Next.js는 서버사이드 렌더링 프레임워크로, 정적 파일만으로는 작동하지 않음
2. 토스 앱인토스는 정적 HTML 파일을 entry point로 기대함
3. API 라우트와 동적 라우팅이 있어 `output: export` 사용 불가

## 해결 방법

### 방법 1: 초기화 HTML을 통한 리다이렉트 (권장)
```bash
# 빌드 및 배포
cd doll-catcher-landing
yarn build
yarn ait:prepare
```

이 방법은:
- `public/init.html`을 entry point로 사용
- 토스 웹뷰 환경을 감지하고 초기화
- Next.js 앱으로 자동 리다이렉트

### 방법 2: 토스 웹프레임워크 사용
```bash
# 토스 전용 빌드 명령어
yarn granite build
```

granite 명령어는 `@apps-in-toss/web-framework`에서 제공하는 토스 전용 빌드 도구입니다.

### 방법 3: 서버리스 배포
실제 프로덕션에서는 Vercel이나 AWS Lambda를 사용하여 Next.js를 서버리스로 배포하고,
토스 앱에서는 해당 URL을 직접 로드하는 것이 가장 안정적입니다.

## 현재 설정 요약

### 1. `ait.config.json`
- entry: `./init.html` - 초기화 페이지
- webview 설정 최적화

### 2. `next.config.ts`
- generateBuildId: 빌드 ID 고정으로 캐싱 최적화
- trailingSlash: URL 경로 일관성
- 보안 헤더 설정

### 3. 추가된 파일들
- `public/init.html`: 토스 웹뷰 초기화 및 리다이렉트
- `public/webview-polyfill.js`: 구형 웹뷰 호환성
- `public/toss-bridge-init.js`: 토스 브릿지 초기화
- `src/app/_app.tsx`: 에러 바운더리

## 테스트 체크리스트

### 로컬 테스트
1. ✅ 빌드 성공 확인
2. ✅ dist 폴더 생성 확인
3. ✅ init.html 파일 존재 확인
4. ⬜ 로컬 서버에서 테스트

### 토스 앱 테스트
1. ⬜ AIT 파일 생성
2. ⬜ 앱인토스에 업로드
3. ⬜ 샌드박스 앱에서 테스트
4. ⬜ 콘솔 로그 확인

## 디버깅 팁

### Android Studio Logcat
```bash
adb logcat | grep -i "dollcatcher\|webview\|javascript"
```

### Chrome 원격 디버깅
1. Chrome에서 `chrome://inspect` 접속
2. 연결된 디바이스에서 WebView 선택
3. Console과 Network 탭 확인

### 주요 확인사항
- 네트워크 요청이 정상적으로 이루어지는지
- JavaScript 에러가 발생하지 않는지
- 리다이렉트가 정상 작동하는지

## 추가 고려사항

### 최적화 옵션
1. **PWA 설정**: 오프라인 지원을 위한 Service Worker
2. **CDN 사용**: 정적 파일을 CDN에서 서빙
3. **이미지 최적화**: next/image 대신 일반 img 태그 사용 고려

### 대안
토스 앱인토스가 Next.js를 제대로 지원하지 않는다면:
1. **React 정적 빌드**: Create React App으로 마이그레이션
2. **Vite**: 더 빠른 빌드와 정적 배포 지원
3. **외부 호스팅**: Vercel/Netlify에 배포 후 WebView로 로드

## 결론
현재 설정으로 토스 앱인토스에서 Next.js 앱이 작동해야 합니다.
만약 여전히 문제가 있다면, 토스 기술 지원팀에 문의하여
Next.js 지원 여부와 권장 설정을 확인하는 것이 좋습니다.