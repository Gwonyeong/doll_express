const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const compression = require("compression");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

// 기본 미들웨어 설정
app.use(helmet());
app.use(compression());
app.use(morgan("combined"));

// CORS 설정
const corsOptions = {
  origin: function (origin, callback) {
    // 개발 환경에서는 모든 localhost 포트 허용
    if (process.env.NODE_ENV === "development") {
      const allowedOrigins = [
        "http://localhost:3000",
        "http://localhost:3001",
        "http://localhost:3002",
        "http://127.0.0.1:3000",
        "http://127.0.0.1:3001",
        "http://127.0.0.1:3002",
        "http://192.168.200.151:3000",
      ];

      // origin이 없는 경우 (같은 도메인에서의 요청) 허용
      if (!origin) return callback(null, true);

      if (allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        console.log("CORS 차단된 origin:", origin);
        callback(new Error("Not allowed by CORS"));
      }
    } else {
      // 프로덕션 환경에서는 환경변수로 지정된 도메인만 허용
      const allowedOrigins = [
        process.env.FRONTEND_URL,
        "https://dollpickmap.apps.tossmini.com",
        "https://dollpickmap.private-apps.tossmini.com",
      ].filter(Boolean); // undefined 값 제거

      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.log("CORS 차단된 origin:", origin);
        callback(new Error("Not allowed by CORS"));
      }
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
};

app.use(cors(corsOptions));

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// Preflight 요청 처리
app.options("*", cors(corsOptions));

// API 라우트
app.use("/api/stores", require("./routes/stores"));
app.use("/api/reviews", require("./routes/reviews"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/admin", require("./routes/admin"));
app.use("/api/toss", require("./routes/toss"));

// 헬스 체크 엔드포인트
app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    message: "DollCatcher API Server is running",
    timestamp: new Date().toISOString(),
  });
});

// 기본 루트 응답
app.get("/", (req, res) => {
  res.json({
    message: "DollCatcher API Server",
    version: "1.0.0",
    endpoints: {
      stores: "/api/stores",
      reviews: "/api/reviews",
      auth: "/api/auth",
      admin: "/api/admin",
      health: "/health",
    },
  });
});

// 404 에러 핸들러
app.use((req, res) => {
  res.status(404).json({
    error: "Not Found",
    message: `경로 ${req.originalUrl}을 찾을 수 없습니다.`,
  });
});

// 전역 에러 핸들러
app.use((err, req, res, next) => {
  console.error("Error:", err);
  res.status(err.status || 500).json({
    error: "Internal Server Error",
    message:
      process.env.NODE_ENV === "development"
        ? err.message
        : "서버 오류가 발생했습니다.",
  });
});

// 서버 시작 (로컬 개발용)
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`🚀 DollCatcher API Server가 포트 ${PORT}에서 실행 중입니다.`);
    console.log(`📍 Health check: http://localhost:${PORT}/health`);
  });
}

module.exports = app;
