<template lang="pug">
  .stripe(:class="classes")
</template>

<script>
export default {
  props: ['i'],
  computed: {
    classes () {
      return { transition: this.$store.state.transitioning }
    }
  }
}
</script>

<style lang="sass">
@import '~assets/helpers'

@keyframes transition-before
  0%
    top: 100%
    opacity: 1

  50%
    top: 0
    opacity: 1
    bottom: 0

  100%
    // opacity: 0
    top: 0
    bottom: 100%

.stripe
  border-right: 1px solid rgba(white, 0.3)
  position: absolute
  top: 0
  bottom: 0
  pointer-events: none
  z-index: -1
  transition: 0.2s background-color

  &::before,
  &:first-child::after
    content: ''
    position: absolute
    bottom: 0
    right: -1px
    top: 100%
    width: 1px
    background-color: white
    transition: top 0.2s ease-in-out, bottom .2s ease-in-out

  &:first-child::after
    right: auto
    left: 0px


  @for $i from 0 through 7
    &:nth-child(#{$i + 1})
      $width: 100% / 8
      width: $width
      left: $i * $width
      $duration: 0.6s

      &.transition
        &::before
          animation: $duration 1 transition-before
          animation-delay: .1s * ($i + 1)

        &:first-child::after
          animation: $duration 1 transition-before
          animation-delay: 0s

      +tablet
        $width: 100% / 4
        width: $width
        left: $i * $width

        @if $i >= 4
          display: none

      +mobile
        $width: 100% / 3
        width: $width
        left: $i * $width

        @if $i >= 3
          display: none

  &:first-child
    border-left: 1px solid rgba(white, .5)
</style>
