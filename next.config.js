const withPWA = require('next-pwa')

module.exports = withPWA({
  swcMinify: false,
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public'
  },
  optimizeFonts: false,
  images: {
    path: '/_next/image',
    loader: 'default'
  },
  eslint: {
    dirs: [
      'components',
      'layouts',
      'pages',
      'styles',
      'theme'
    ]
  },
  reactStrictMode: true,
  pageExtensions: ['tsx']
})
