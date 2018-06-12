const pkg = require('./package')

module.exports = {
  mode: 'spa',

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    apiUrl: process.env.API_URL || 'http://localhost:8081'
  },

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/css/material-kit.css?v=2.0.3' },
      { rel: 'stylesheet', href: '/demo/demo.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css' }
    ],
    script: [
      { src: '/js/core/jquery.min.js' },
      { src: '/js/core/popper.min.js' },
      { src: '/js/core/bootstrap-material-design.min.js' },
      { src: '/js/plugins/moment.min.js' },
      // { src: '/js/plugins/bootstrap-tagsinput.js' },
      // { src: '/js/plugins/jasny-bootstrap.min.js' },
      // { src: '/js/plugins/jquery.flexisel.js' },
      { src: '/js/plugins/bootstrap-datetimepicker.js' },
      { src: '/js/plugins/nouislider.min.js' },
      { src: '/js/material-kit.js?v=2.0.3' },
      { src: '/js/alertService.js' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
