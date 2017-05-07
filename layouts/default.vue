<template lang="pug">
  section
    #main
      nuxt
      .stripes
        stripe(v-for="i in 6", :key="i", :i="i")
    global-nav
</template>

<script>
  import Stripe from '~/components/stripe'
  import GlobalNav from '~/components/nav'

  export default {
    components: { Stripe, GlobalNav }
  }
</script>

<style lang="sass">

#main
  width: 100%
  max-width: 1200px
  margin: 0 auto
  padding: 60px 20px
  position: relative
  height: 100vh
  overflow-x: hidden
</style>
