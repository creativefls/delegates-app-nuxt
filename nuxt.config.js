const pkg = require('./package')
require('dotenv').config()

const nodeExternals = require('webpack-node-externals')

module.exports = {
  mode: 'spa',
  head: {
    title: 'FLS 2018',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' }

    ]
  },
  loading: { color: '#18bc97' },
  css: [
    'vuetify/src/stylus/main.styl'
  ],
  router: {
    middleware: ['auth']
  },
  plugins: [
    '@/plugins/vuetify'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/dotenv',
    '@nuxtjs/pwa'
  ],
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseUrl: process.env.API_URL || 'http://whorapiurl.com'
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/api/auth/login', method: 'post', propertyName: 'token' },
          logout: false,
          user: { url: '/api/auth', method: 'get', propertyName: 'user' },
        },
        tokenRequired: true,
        tokenType: ''
      }
    },
    redirect: {
      login: '/auth/login',
      logout: '/',
      callback: '/auth/login',
      user: '/profile',
      home: '/',
    },
    resetOnError: true,
  },
  manifest: {
    name: 'Future Leader Summit 2018',
    short_name: 'FLS 2018',
    background_color: "#f4f2e9",
    theme_color: '#18bc97',
    start_url: '/'
  },
  env: {
    apiUrl: process.env.API_URL || 'http://wrongurl.com'
  },
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ]
      }
    }
  }
}
