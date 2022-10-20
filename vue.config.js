const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath:'/library/',
  transpileDependencies: true,
  devServer: {
    port: 8999,
    open: true,
    https: false,
    // host: "localhost",
 /*    proxy: {
      "/dev-apis": {
        [process.env.VUE_APP_BASE_API]: {
          target: process.env.VUE_APP_SERVICE_URL,
          // target:'http:localhost:8081/',
          changeOrigin: true,
          pathRewrite: {
            ['^'+process.env.VUE_APP_BASE_API]: "",
          },
        },
      },
    }, */
  },
  lintOnSave: false,
  productionSourceMap: false,
});
