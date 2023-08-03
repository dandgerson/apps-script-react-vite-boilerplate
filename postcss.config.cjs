/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [require("autoprefixer"), require("postcss-inline-svg")],
};

module.exports = config;
