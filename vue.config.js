const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: "./",
  devServer: {
    proxy: 'http://localhost:8083',
    // static: {
    //   directory: '',
    // },
    compress: true,
    port: 8080,
    allowedHosts: 'all',
  },
});
