module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Sam Garson',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Sam Garson helps companies turn their stories into digital products.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    { src: '~assets/global.sass', lang: 'sass' }
  ],
  transition: {
    mode: 'out-in',
    beforeLeave (el) {
      el.__vue__.$store.dispatch('transition')
    },
  },
  /*
  ** Customize the progress-bar color
  */
  // loading: { color: '#FFFFFF' },
  loading: false,
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    vendor: ['axios'],
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
