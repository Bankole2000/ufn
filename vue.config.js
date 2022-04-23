module.exports = {
  transpileDependencies: ["vuetify"],
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Ultimately Fertile Nation";
      return args;
    });
  },
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/"
  // publicPath: '',
  // baseUrl: '/projects/vue/webpieces/dist/',
};