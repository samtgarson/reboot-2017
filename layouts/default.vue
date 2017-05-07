<template lang="pug">
  section
    #main
      .stripes
        stripe(v-for="i in 6", :key="i", :i="i")
      nuxt
    global-nav
</template>

<script>
  import Stripe from '~/components/stripe'
  import GlobalNav from '~/components/nav'

  export default {
    components: { Stripe, GlobalNav }
  }
</script>

<style lang="sass" scoped>

#main
  width: 100%
  max-width: 1200px
  margin: 0 auto
  padding: 60px 20px
  position: relative
  height: 100vh

.stripes
  position: fixed
  left: 0
  right: 0
  top: 0
  bottom: 0
  overflow-x: hidden
</style>
