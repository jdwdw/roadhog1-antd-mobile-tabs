require('dotenv').config();

const prod = process.env.ENV === 'prod';

export default {
  hash: true,
  entry: 'src/index.js',
  disableCSSModules: false,
  ignoreMomentLocale: true,
  autoprefixer: {
    browsers: ['iOS >= 8', 'Android >= 4'],
  },
  // 在构建和执行阶段都可以获取 defined vars，比如在 index.ejs 中就可以获取 PUBLIC_PATH 和 NSLOG_CDN
  define: {},
  extraBabelPlugins: [
    'transform-runtime',
    'lodash',
    [
      'import',
      {
        libraryName: 'antd-mobile',
        style: true,
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
      },
    ],
  ],
  env: {
    development: {
      multipage: true,
      // 默认开发环境为 '/'
      // publicPath: '/',
      extraBabelPlugins: ['dva-hmr'],
    },
    production: {
      multipage: true,
      publicPath: '/',
    },
  },
};
