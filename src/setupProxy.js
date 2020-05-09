const proxy = require("http-proxy-middleware").createProxyMiddleware;
 console.log(proxy,'http-proxy-middleware')
module.exports = function(app) {
  app.use(
    proxy("/api/**", {
      target: "http://localhost:3001",//跨域地址
      changeOrigin: true,
    })
  );
};