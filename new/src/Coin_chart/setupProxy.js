const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app){
        app.use(
            '/api', createProxyMiddleware({
                target: 'https://api.upbit.com',
                pathRewrite:{
                    '^/api':''
                },
                changeOrigin:true
            }),
        );
}