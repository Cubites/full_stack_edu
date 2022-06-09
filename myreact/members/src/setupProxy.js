const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
    app.use(
        createProxyMiddleware('/user_inform/onLogin', {
            target: 'http://localhost:4000',
            changeOrigin: true
        })
    )
}