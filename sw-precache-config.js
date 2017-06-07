module.exports = {
  staticFileGlobs: [
    '/manifest.json',
    '/bower_components/webcomponentsjs/*.js',
    '/images/*'
  ],
  navigateFallback: '/index.html',
  navigateFallbackWhitelist: [/^(?!.*\.html$|\/data\/).*/],
  runtimeCaching: [
  {
    urlPattern: /https:\/\/firebasestorage.googleapis.com\/v0\/b\/bmcsy2s2.appspot.com\/o\/tester(.*)/,
    handler: 'cacheFirst',
    options: {
      cache: {
        maxEntries: 200,
        name: 'firebase-images'
      }
    }
  },
    {
      urlPattern: /.*\.(png|jpg|gif|svg)/i,
      handler: 'fastest',
      options: {
        cache: {
          maxEntries: 200,
          name: 'data-images-cache'
        }
      }
    },
    {
      urlPattern: /\/data\/articles\/.*/,
      handler: 'fastest',
      options: {
        cache: {
          maxEntries: 100,
          name: 'data-articles-cache'
        }
      }
    },
    {
      urlPattern: /\/data\/.*json/,
      handler: 'fastest',
      options: {
        cache: {
          maxEntries: 10,
          name: 'data-json-cache'
        }
      }
    }
  ]
};
