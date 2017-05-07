<template lang="pug">
  section
    #main
      nuxt
    nav
      ul
        nuxt-link(tag="li", :to="{ name: 'index' }", :exact="true")#home
          a Sam Garson #[span Digital Product Strategy]
        nuxt-link(tag="li", :to="{ name: 'work' }")#work
          a Selected Works
        li#links
          a Quick Links
        nuxt-link(tag="li", :to="{ name: 'contact' }")#contact
          a Get In Touch
</template>

<style lang="sass">

#main
  width: 100%
  max-width: 1200px
  margin: 0 auto
  padding: 60px 20px
  position: relative
  height: 100vh

nav
  z-index: 1

ul
  padding: 0
  margin: 0

li
  display: block
  list-style-image: none
  position: absolute

  &::after
    content: ''
    position: absolute
    left: 0
    height: 1px
    bottom: -1px
    background-color: white
    right: 100%
    transition: right .2s ease-out

  &.nuxt-link-active::after
    right: 0


  span
    opacity: .5

  &#home
    top: 20px
    left: 20px

    &::after
      content: none

  &#work
    top: 20px
    right: 20px

  &#links
    bottom: 20px
    left: 20px

  &#contact
    bottom: 20px
    right: 20px
</style>
