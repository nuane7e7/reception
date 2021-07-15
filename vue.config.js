const path = require('path')
const resolve = dir => path.join(__dirname, dir)
module.exports = {
  publicPath: process.env.VUE_APP_CDN,
  chainWebpack: config => {
    config.resolve.alias.set("@", resolve("src"))
      .set("api", resolve("src/api"))
      .set("cpt", resolve("src/components"))
      .set("u", resolve("src/utils"))
  },
  configureWebpack: {
    devtool: 'source-map'
    },
  css: {
    loaderOptions: {
      postcss: {
				plugins: [
					// require('autoprefixer')({}),
					require('postcss-px-to-viewport')({
						unitToConvert: 'px',//需要转换的单位，默认为"px"；
						viewportWidth: process.env.VUE_APP_VIEWPORT_WIDTH,//设计稿的视口宽度
						unitPrecision: 6,//单位转换后保留的小数位数
						viewportUnit: 'vw',//转换后的视口单位
						fontViewportUnit: 'vw',//转换后字体使用的视口单位
						// exclude: [/element-ui/, /nprogress/, /desktop/],
					}),
				],
			},
      scss: {
        prependData: `@import "~@/assets/css/global.scss";`,
      },
    },
  },
};