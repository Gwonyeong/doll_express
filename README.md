# DollCatcher - 인형뽑기 매장 정보 서비스

DollCatcher는 인형뽑기 매장 정보를 제공하는 지도 기반 서비스입니다. 기존 Next.js 프로젝트를 React(프론트엔드) + Express.js(백엔드)로 분리한 프로젝트입니다.

## 🏗️ 프로젝트 구조

```
doll/
├── doll-backend/           # Express.js 백엔드 API 서버
├── doll-frontend/          # React 프론트엔드 애플리케이션
├── doll-catcher-landing/   # 기존 Next.js 프로젝트 (참고용)
└── README.md               # 이 파일
```

## 🚀 빠른 시작

### 1. 백엔드 서버 실행

```bash
cd doll-backend

# 환경 변수 설정
cp .env.example .env
# .env 파일을 편집하여 데이터베이스 URL 등 설정

# 의존성 설치
npm install

# Prisma 클라이언트 생성
npm run db:generate

# 데이터베이스 마이그레이션
npm run db:push

# 개발 서버 실행
npm run dev
```

백엔드 서버가 `http://localhost:3001`에서 실행됩니다.

### 2. 프론트엔드 애플리케이션 실행

```bash
cd doll-frontend

# 환경 변수 설정
cp .env.example .env
# .env 파일을 편집하여 API URL 등 설정

# 의존성 설치
npm install

# 개발 서버 실행
npm start
```

프론트엔드 애플리케이션이 `http://localhost:3000`에서 실행됩니다.

## 🛠️ 기술 스택

### 백엔드 (doll-backend/)
- **Framework**: Express.js
- **Language**: JavaScript
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: 토스 OAuth
- **Deployment**: Node.js

### 프론트엔드 (doll-frontend/)
- **Framework**: React
- **Language**: JavaScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router
- **HTTP Client**: Axios

## 📋 주요 기능

- 🗺️ **지도 기반 매장 검색**: 위치 기반으로 주변 인형뽑기 매장 조회
- ⭐ **리뷰 시스템**: 매장별 리뷰 작성, 조회, 관리
- 🔐 **토스 인증**: 토스 OAuth를 통한 안전한 사용자 인증
- 👨‍💼 **관리자 백오피스**: 매장, 리뷰, 사용자 관리
- 📱 **반응형 디자인**: 모바일 우선 반응형 UI/UX

## 🔧 환경 설정

### 백엔드 환경 변수 (.env)

```env
PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
DATABASE_URL="postgresql://username:password@localhost:5432/dollcatcher"
TOSS_CLIENT_ID=your_toss_client_id
TOSS_CLIENT_SECRET=your_toss_client_secret
TOSS_REDIRECT_URI=http://localhost:3001/api/auth/toss/callback
NEXT_PUBLIC_CRYPTO_SECRET_KEY=your_crypto_secret_key
```

### 프론트엔드 환경 변수 (.env)

```env
REACT_APP_API_URL=http://localhost:3001
REACT_APP_KAKAO_API_KEY=your_kakao_api_key
REACT_APP_TOSS_CLIENT_ID=your_toss_client_id
REACT_APP_ADMIN_USER_IDS=admin_user_id_1,admin_user_id_2
```

## 📊 API 문서

### 주요 엔드포인트

- `GET /api/stores` - 매장 목록 조회
- `GET /api/stores/:id` - 특정 매장 상세 정보
- `GET /api/reviews/store/:storeId` - 매장 리뷰 목록
- `POST /api/reviews` - 리뷰 작성
- `POST /api/auth/toss/callback` - 토스 OAuth 콜백
- `GET /api/admin/stats` - 관리자 대시보드 통계

자세한 API 문서는 각 라우트 파일을 참고하세요.

## 🗄️ 데이터베이스

프로젝트는 PostgreSQL 데이터베이스를 사용하며, Prisma ORM을 통해 관리됩니다.

### 주요 모델
- `GameBusiness` - 인형뽑기 매장 정보
- `User` - 사용자 정보 (토스 OAuth)
- `Review` - 리뷰 정보

## 🚢 배포

### 백엔드 배포
```bash
cd doll-backend
npm run build  # 필요시
npm start
```

### 프론트엔드 배포
```bash
cd doll-frontend
npm run build
# build/ 폴더를 웹 서버에 배포
```

## 🤝 기여하기

1. 이 저장소를 Fork 합니다
2. 새로운 기능 브랜치를 생성합니다 (`git checkout -b feature/new-feature`)
3. 변경사항을 커밋합니다 (`git commit -am 'Add new feature'`)
4. 브랜치에 Push 합니다 (`git push origin feature/new-feature`)
5. Pull Request를 생성합니다

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 📞 지원

문제가 있거나 질문이 있으시면 이슈를 생성해 주세요.