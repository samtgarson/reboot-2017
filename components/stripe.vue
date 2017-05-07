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

  80%
    top: 0

  100%
    top: 100%

.stripe
  border-right: 1px solid rgba(white, .5)
  position: absolute
  top: 0
  bottom: 0
  pointer-events: none
  z-index: -1
  transition: 0.2s background-color

  &::before
    content: ''
    position: absolute
    bottom: 0
    left: -1px
    top: 100%
    width: 1px
    background-color: white
    transition: top 0.1s ease-in-out


  @for $i from 0 through 5
    &:nth-child(#{$i + 1})
      $width: 100% / 6
      width: $width
      left: $i * $width
      $duration: .8s - ($i * 0.08s)

      &.transition
        &::before
          animation: $duration 1 transition-before
          animation-delay: .1s * $i

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
