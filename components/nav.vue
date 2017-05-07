<template lang="pug">
  nav(:class="{ show }")
    ul
      nuxt-link(tag="li", :to="{ name: 'index' }", :exact="true")#home
        a Sam Garson #[span Digital Product Strategy]
      li#menu
        a(@click="show = !show") {{ show ? 'Close' : 'Menu' }}
      transition(name="fade")
        .mobile(v-show="show")
          nuxt-link(tag="li", :to="{ name: 'index' }", :exact="true")#home-mobile
            a Home
          nuxt-link(tag="li", :to="{ name: 'work' }")#work
            a Selected Works
          li#links
            a Quick Links
          nuxt-link(tag="li", :to="{ name: 'contact' }")#contact
            a Get In Touch
</template>

<script>
export default {
  data: () => ({ show: false }),
  watch: {
    $route () {
      this.show = false
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/helpers'

nav
  position: fixed
  top: 0
  bottom: 0
  left: 0
  right: 0
  pointer-events: none
  transition: background .3s ease-in-out

  +mobile
    text-align: center
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

.mobile
  height: 100vh
  display: flex
  flex-flow: column nowrap
  justify-content: center

  +desktop
    display: block !important
  +tablet
    display: block !important

  +mobile
    li
      position: relative
      top: auto !important
      bottom: auto !important
      right: auto !important
      left: auto !important
      margin-bottom: 20px
</style>
