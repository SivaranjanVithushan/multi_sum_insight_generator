// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api', // Specify the endpoint you want to proxy
    createProxyMiddleware({
      target: 'https://research-project-h4fb.onrender.com',
      changeOrigin: true,
    })
  );
};