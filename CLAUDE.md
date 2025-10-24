# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Always respond in 한국어

## Project Overview

DollCatcher는 인형뽑기 매장 정보를 제공하는 지도 기반 서비스입니다. 이 프로젝트는 두 가지 주요 부분으로 구성되어 있습니다:
1. **프로젝트 루트**: PRD, 데이터베이스 설정, 기획 문서들
2. **doll-catcher-landing/**: 실제 Next.js 웹 애플리케이션

IMPORTANT: `doll-catcher-landing/` 폴더가 프로젝트의 실제 코드베이스입니다. 모든 개발 작업은 이 폴더 안에서 수행해야 합니다.

## Commands

개발 및 빌드 명령어는 `doll-catcher-landing/` 디렉토리에서 실행:

```bash
# 개발 서버 실행
yarn dev

# 빌드 (Prisma 생성 포함)
yarn build

# 프로덕션 서버 실행  
yarn start

# 린팅
yarn lint

# 데이터베이스 관련
yarn db:generate    # Prisma 클라이언트 생성
yarn db:push        # 스키마를 데이터베이스에 푸시
yarn db:migrate     # 마이그레이션 실행
yarn db:studio      # Prisma Studio 실행

# CSV 데이터 임포트
yarn import-csv
```

## Technology Stack

### Core Framework
- Next.js 15.3.4 (App Router)
- TypeScript with strict mode
- Node.js environment

### UI/Styling
- Tailwind CSS v4
- Framer Motion 12.18.1 (애니메이션)
- next-themes (다크모드 지원)
- Lucide React (아이콘)
- Sonner (토스트 알림)

### Database & Backend
- PostgreSQL (프로덕션)
- Prisma 6.12.0 (ORM)
  - Prisma Client는 `src/generated/prisma/`에 생성됨
  - Schema는 `doll-catcher-landing/prisma/schema.prisma`에 정의
- Supabase (클라우드 데이터베이스)

### Development Tools
- Package Manager: Yarn (필수)
- ESLint 9 with Next.js configurations
- tsx (TypeScript 실행기)

## Architecture

### Project Structure
```
doll/
├── PRD.md                    # 프로덕트 요구사항 문서
├── DATABASE_SETUP.md         # 데이터베이스 설정 가이드
├── CLAUDE.md                 # 이 파일
└── doll-catcher-landing/     # 메인 애플리케이션
    ├── src/
    │   ├── app/              # Next.js App Router 페이지
    │   │   ├── api/          # API 라우트
    │   │   ├── admin/        # 관리자 백오피스
    │   │   ├── map/          # 지도 페이지
    │   │   └── reviews/      # 리뷰 페이지
    │   ├── components/       # 재사용 컴포넌트
    │   ├── lib/              # 유틸리티 및 설정
    │   └── generated/        # Prisma 생성 파일
    ├── prisma/
    │   └── schema.prisma     # 데이터베이스 스키마
    └── scripts/              # 유틸리티 스크립트
```

### Database Models
- **GameBusiness**: 청소년게임제공업 데이터 (인형뽑기 매장 정보)
- **Review**: 사용자 리뷰 및 평점

### Key Pages
- `/`: 메인 랜딩페이지
- `/map`: 지도 기반 매장 검색
- `/admin`: 관리자 백오피스 (비밀번호: "admin123")
- `/reviews/[storeId]`: 매장별 리뷰 페이지
- `/terms`: 서비스 약관

## Development Guidelines

### Component Architecture
- 페이지 컴포넌트는 `src/app/` 디렉토리
- 재사용 가능한 컴포넌트는 `src/components/` 디렉토리
- UI 컴포넌트는 `src/components/ui/` 디렉토리

### API Routes
- 모든 API는 `src/app/api/` 디렉토리
- Prisma Client를 통한 데이터베이스 접근
- 타입 안정성을 위한 명시적 response 타입 정의

### Styling Guidelines
- Tailwind CSS 우선 사용
- 커스텀 스타일은 `tailwind.config.ts`에서 관리
- 메인 브랜드 컬러: #DD45F1 (핑크-퍼플)
- 애니메이션은 Framer Motion 활용

### Database Operations
- 모든 스키마 변경은 Prisma migration 사용
- 복잡한 쿼리는 서비스 레이어에서 처리
- 성능 최적화를 위한 인덱스 활용

## Development Rules

1. **Package Manager**: 반드시 yarn 사용 (npm 금지)
2. **Working Directory**: 모든 개발 작업은 `doll-catcher-landing/` 디렉토리에서
3. **Commit Strategy**: 기능 단위로 주기적 커밋
4. **Testing**: 사용자가 직접 테스트 진행 (build 테스트는 예외)
5. **Server**: 개발 서버를 임의로 실행하지 말 것

## Special Considerations

- **Target Audience**: MZ세대 (특히 젊은 여성층)
- **Design Language**: 트렌디하고 모던한 UI/UX
- **Performance**: 모바일 우선 반응형 디자인
- **Data Source**: 공공데이터 기반 청소년게임제공업 정보

# important-instruction-reminders
Do what has been asked; nothing more, nothing less.
NEVER create files unless they're absolutely necessary for achieving your goal.
ALWAYS prefer editing an existing file to creating a new one.
NEVER proactively create documentation files (*.md) or README files. Only create documentation files if explicitly requested by the User.