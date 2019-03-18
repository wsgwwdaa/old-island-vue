let path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        // target: 'http://bl.7yue.pro/v1',
        target: 'http://bl.7yue.pro/v1',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  },
  chainWebpack (config) {
    config.resolve.alias
      .set('components', resolve('src/components'))
      .set('common', resolve('src/common'))
      .set('model', resolve('src/model'))
  }
}

//   https: false,
//   hotOnly: false,
//   proxy: {
//     '/api': {
//       target: 'http://bl.7yue.pro/v1',
//       ws: true,
//       changOrigin: true,
//       pathRewrite: {
//         '^/api': '/'
//       }
//     }
//   }
// }
