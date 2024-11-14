const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
      ? '/movienet/'  // GitHub Pages에서 배포하는 경우
      : '/'
})
