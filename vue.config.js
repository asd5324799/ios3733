// vue.config.js
module.exports = {
  devServer: {
    // APP接口
    // proxy: 'https://api2.3733.com' 
    // H5接口
    // proxy: 'http://api2.3733.com'
    proxy: {
      '/api': {
        target: 'http://api2.3733.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        } 
      },
      // '/manage': {
      //   target: 'https://grq.3733.com',
      //   changeOrigin: true,
      //   pathRewrite: {
      //       '^/manage': '/index/api'
      //   }
      // }
    }
  },
  productionSourceMap: false,
  filenameHashing: false,
  // 如果是H5编译
  // publicPath: '/static/h5/box/',
  // 如果是APP编译
  // publicPath: 'https://static.3733.com/3733/',
  // 如果是APP编译
  indexPath: 'btdown.html',
}   