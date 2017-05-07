<template lang="pug">
  .container(:class="classes")
    ol
      li Tell your story
      li Make people hear it
      li Profit
    p.
      Brands and products that focus on
      #[nuxt-link(:to="{ name: 'about' }") The Why]
      connect with their audiences and solve problems
      more effectively.
    p.
      I can help turn your story into a beautiful,
      effective digital product.
</template>

<script>
export default {
  data: () => ({ go1: false, go2: false }),
  mounted () {
    setImmediate(() => { this.go1 = true })
    setTimeout(() => { this.go2 = true }, 3000)
  },
  computed: {
    classes () {
      const { go1, go2 } = this
      return { go1, go2 }
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/helpers'

ol
  margin-top: 20vh
  margin-bottom: 50px
  padding-left: 0
  transition: margin 1s ease-in-out

li
  list-style-position: inside
  font-size: 4.2rem
  opacity: 0
  transition: 0.6s opacity ease, 0.6s transform ease
  transform: translate3d(0, -10px, 0)

  +tablet
    font-size: 2.4rem

  +mobile
    font-size: 1.5rem

  @for $i from 0 through 2
    &:nth-child(#{$i + 1})
      transition-delay: $i * 1s

p
  font-size: 1.2rem
  max-width: 500px
  margin-bottom: 20px
  opacity: 0
  transition: 0.5s 0.5s ease-in-out opacity, 1s transform ease
  transform: translate3d(0, 20px, 0)

  +mobile
    font-size: 1rem

  @for $i from 0 through 2
    &:nth-child(#{$i + 1})
      transition-delay: $i * .2s

  a
    text-decoration: underline

.go1
  li
    opacity: 1
    transform: translate3d(0, 0, 0)

.go2
  ol
    margin-top: 8vh

  p
    opacity: 1
    transform: translate3d(0, 0, 0)
</style>
