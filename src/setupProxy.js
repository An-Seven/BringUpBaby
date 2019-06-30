const proxy=require("http-proxy-middleware")
console.log(123)
module.exports=function(app){
    app.use(
            proxy("/api", {
              target: "http://wyj.taogou1.cn",
              changeOrigin: true,
              pathRewrite: {
                "^/api": ""
              }
            })
          ); 
    app.use(
            proxy("/code", {
              target: "http://henqy.ddns.net:10080",
              changeOrigin: true,
              pathRewrite: {
                "^/code": ""
              }
            })
          );
}