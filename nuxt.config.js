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
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  loading: { color: '#FFFFFF' },
  css: [
    'vuetify/src/stylus/main.styl'
  ],
  plugins: [
    '@/plugins/vuetify'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/pwa'
  ],
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  manifest: {
    name: 'FLS 2018',
    background_color: "#8e44ad",
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
  },
  env: {
    apiUrl: process.env.API_URL || 'http://wrongurl.com'
  }
}
