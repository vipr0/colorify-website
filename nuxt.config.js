export default {
  target: 'static',
  head: {
    title: 'colorify-website',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
  ],
  plugins: [
    { src: "plugins/vue-twentytwenty.js", mode: 'client' }
  ],
  components: true,
  buildModules: ['@nuxtjs/tailwindcss'],
}
