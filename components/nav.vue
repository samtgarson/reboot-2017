<template lang="pug">
  nav(:class="{ show, links }")
    ul
      nuxt-link(tag="li", :to="{ name: 'index' }", :exact="true")#home
        a Sam Garson #[span Digital Product Strategy]
      li#menu
        a(@click="show = !show; links = false") {{ show ? 'Close' : 'Menu' }}
      transition(name="fade")
        .mobile(v-show="show")
          nuxt-link(tag="li", :to="{ name: 'index' }", :exact="true")#home-mobile
            a Home
          nuxt-link(tag="li", :to="{ name: 'work' }")#work
            a Selected Works
          li#links
            a(@click="links = true; show = false") Quick Links
          nuxt-link(tag="li", :to="{ name: 'contact' }")#contact
            a Get In Touch
      transition(name="fade")
        .quick-links(v-show="links")
          nuxt-link(tag="li", :to="{ name: 'about' }") About The Why
          li(v-for="(url, name) in social")
            a(:href="url", target="_blank") {{ name }}
          li
            a(@click="links = false; show = true") Back
</template>

<script>
const social = {
  Github: 'https://github.com/samtgarson',
  Twitter: 'https://twitter.com/samtgarson',
  VSCO: 'https://vsco.co/samtgarson'
}

export default {
  data: () => ({
    show: false,
    links: false,
    social
  }),
  watch: {
    $route () {
      this.show = false
      this.links = false
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/helpers'

nav
  pointer-events: none
  transition: background .3s ease-in-out
  position: fixed
  left: 0
  right: 0
  top: 0
  bottom: 0

  &.links
    background-color: rgba(#0000ff, 0.8)

  +mobile
    &.show
      background-color: rgba(#0000ff, 0.8)

ul
  padding: 0
  margin: 0

li
  list-style: none
  position: absolute
  pointer-events: auto

  a
    position: relative

  a::after
    content: ''
    position: absolute
    left: 0
    height: 1px
    bottom: -1px
    background-color: white
    right: 100%
    transition: right .2s ease-out

  &.nuxt-link-active a::after
    right: 0

  span
    opacity: .5

    +mobile
      display: none

#home
  top: 20px
  left: 20px

  a::after
    content: none

#work
  top: 20px
  right: 20px

#links
  bottom: 20px
  left: 20px

#contact
  bottom: 20px
  right: 20px

#home-mobile
  display: none

  +mobile
    display: block

#menu
  display: none
  top: 20px
  right: 20px

  +mobile
    display: block

.mobile,
.quick-links
  height: 100vh
  display: flex
  flex-flow: column nowrap
  position: fixed
  left: 0
  right: 0
  top: 0
  bottom: 0
  justify-content: center
  align-items: center

.mobile
  +desktop
    display: block !important
  +tablet
    display: block !important

  li
    +mobile
      margin-bottom: 20px
      position: relative
      top: auto !important
      bottom: auto !important
      right: auto !important
      left: auto !important

.quick-links li
  position: relative
  margin-bottom: 20px
</style>
