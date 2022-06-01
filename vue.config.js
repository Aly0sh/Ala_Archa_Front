const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: "./",
  devServer: {
    proxy: 'http://localhost:8083',
    static: {
      directory: '../alarcha_backend',
    },
    compress: true,
    port: 8083,
    allowedHosts: 'all',
  },
});
