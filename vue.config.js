const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: path.resolve(__dirname, 'dist'), // Optional: Customize the output directory
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'frontend/src'), 
      },
    },
  },
  devServer: {
    proxy: 'http://localhost:3000'
  },
});
