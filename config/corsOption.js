const allowedOrigins = process.env.ALLOWED_ORIGINS.split(",");

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      // allowed
      callback(null, true);
    } else {
      // Not allowed
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
};

module.exports = corsOptions;
