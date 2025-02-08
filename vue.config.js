const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: ['vuetify'],
  lintOnSave:false,
  publicPath:"/hrms/",
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'HR Management System',
    },
  },
});
