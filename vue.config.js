const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: "./",
  proxyTable: {
    '/api': {
      target: 'http://localhost:8083',
      changeOrigin: true,
    }
  }
});
