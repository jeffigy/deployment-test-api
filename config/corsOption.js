const corsOptions = {
  origin: (origin, callback) => {
    if (process.env.ALLOWED_ORIGINS.indexOf(origin) !== -1 || !origin) {
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
