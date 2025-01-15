const path = require("path");

module.exports = function override(config, env) {
  config.entry = path.resolve(__dirname, "src/app.tsx"); // Укажите путь к вашему файлу
  return config;
};