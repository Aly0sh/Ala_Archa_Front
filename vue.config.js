const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.50.26:8083',
        pathRewrite: { '^/api': '' },
      },
    },
    static: {
      directory: '../alarcha_backend',
    },
    compress: true,
    port: 8083,
    allowedHosts: 'all',
  },
});
