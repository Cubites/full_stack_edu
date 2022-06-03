const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api/server-practice',
        createProxyMiddleware({
            target: 'http://localhost:4000',
            changeOrigin: true
        })
    )
}