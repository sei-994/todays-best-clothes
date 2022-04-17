module.exports = {
  // baseUrl: process.env.NODE_ENV === "production" ? "/todays-best-clothes" : "/",
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/weather-app/" //任意
      : "/",
  outputDir: "docs",
};
