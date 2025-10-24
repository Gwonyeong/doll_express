# 데이터베이스 설정 및 CSV 데이터 임포트 가이드

## 1. PostgreSQL 설치 및 설정

### macOS (Homebrew 사용)

```bash
# PostgreSQL 설치
brew install postgresql

# PostgreSQL 서비스 시작
brew services start postgresql

# 데이터베이스 생성
createdb dollcatcher
```

### Ubuntu/Debian

```bash
# PostgreSQL 설치
sudo apt update
sudo apt install postgresql postgresql-contrib

# PostgreSQL 서비스 시작
sudo systemctl start postgresql
sudo systemctl enable postgresql

# 데이터베이스 생성
sudo -u postgres createdb dollcatcher
```

## 2. 환경변수 설정

`.env` 파일을 프로젝트 루트에 생성하고 다음 내용을 추가하세요:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/dollcatcher?schema=public"

# Naver Maps API
NEXT_PUBLIC_NAVER_MAP_CLIENT_ID=your_naver_map_client_id
```

**주의사항:**

- `username`과 `password`를 실제 PostgreSQL 사용자 정보로 변경하세요
- 로컬 환경에서는 보통 `postgres` 사용자를 사용합니다

## 3. Prisma 설정

### 3.1 Prisma Client 생성

```bash
yarn db:generate
```

### 3.2 데이터베이스 스키마 적용

```bash
# 개발 환경에서 스키마 푸시
yarn db:push

# 또는 마이그레이션 사용
yarn db:migrate
```

## 4. CSV 데이터 임포트

### 4.1 CSV 파일 확인

CSV 파일이 다음 경로에 있는지 확인하세요:

```
public/csv/fulldata_03_05_07_P_청소년게임제공업.csv
```

### 4.2 데이터 임포트 실행

```bash
yarn import:csv
```

이 명령어는 다음 작업을 수행합니다:

- CSV 파일을 읽어서 파싱
- 1000개씩 배치로 데이터베이스에 삽입
- 진행률 표시
- 중복 데이터 건너뛰기

### 4.3 데이터 확인

```bash
# Prisma Studio 실행 (브라우저에서 데이터 확인)
yarn db:studio
```

## 5. 데이터베이스 스키마 정보

### GameBusiness 모델

청소년게임제공업 데이터를 저장하는 메인 테이블입니다.

주요 필드:

- `id`: 자동 증가 기본키
- `사업장명`: 사업장 이름
- `소재지전체주소`: 전체 주소
- `도로명전체주소`: 도로명 주소
- `좌표정보x`, `좌표정보y`: 위치 좌표
- `영업상태명`: 영업 상태
- `총게임기수`: 게임기 수량
- `createdAt`, `updatedAt`: 생성/수정 시간

## 6. 문제 해결

### 6.1 PostgreSQL 연결 오류

```bash
# PostgreSQL 서비스 상태 확인
brew services list | grep postgresql  # macOS
sudo systemctl status postgresql      # Ubuntu/Debian

# PostgreSQL 재시작
brew services restart postgresql      # macOS
sudo systemctl restart postgresql     # Ubuntu/Debian
```

### 6.2 권한 오류

```bash
# PostgreSQL 사용자 생성 및 권한 부여
sudo -u postgres psql
CREATE USER your_username WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE dollcatcher TO your_username;
ALTER USER your_username CREATEDB;
\q
```

### 6.3 CSV 임포트 오류

- CSV 파일 경로가 올바른지 확인
- 파일 인코딩이 UTF-8인지 확인
- 데이터베이스 연결이 정상인지 확인

## 7. 데이터 활용

임포트된 데이터는 다음과 같이 활용할 수 있습니다:

```javascript
// 영업 중인 매장 조회
const activeStores = await prisma.gameBusiness.findMany({
  where: {
    영업상태명: "영업",
  },
});

// 지역별 매장 조회
const storesByRegion = await prisma.gameBusiness.findMany({
  where: {
    소재지전체주소: {
      contains: "서울",
    },
  },
});

// 좌표 정보가 있는 매장 조회
const storesWithCoordinates = await prisma.gameBusiness.findMany({
  where: {
    AND: [{ 좌표정보x: { not: null } }, { 좌표정보y: { not: null } }],
  },
});
```
