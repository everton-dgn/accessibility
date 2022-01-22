const withPWA = require('next-pwa')

const isDevelopment = process.env.NODE_ENV === 'development'

module.exports = withPWA({
  pwa: {
    disable: isDevelopment,
    dest: 'public'
  },
  optimizeFonts: false,
  images: {
    path: '/_next/image',
    loader: 'default'
  },
  eslint: {
    dirs: ['components', 'layouts', 'pages', 'styles', 'theme']
  },
  reactStrictMode: true,
  pageExtensions: ['tsx']
})
