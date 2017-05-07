<template lang="pug">
  .container
    h4 Drop me a line
    form(action="https://formspree.io/hey@samgarson.com", @submit.prevent="submit", :class="{ loading }", ref="form")
      .fields(v-show="success === null")
        input(type="text", name="name", placeholder="What should I call you")
        input(type="email", required, name="email", placeholder="Your email")
        textarea(required, name="message", placeholder="Tell me something good")
        input(type="text" name="_gotcha" style="display:none")
        button(type="submit") {{ loading ? 'Loading' : 'Go' }}
        span(v-if="invalid") (please fill in the fields)
      .done(v-if="success !== null")
        template(v-if="success")
          p Message received, over and out.
          button(type="reset", @click="reset") Send another
        template(v-else)
          p Oops, something went wrong.
          button(@click.prevent="reset(false)") Try again

</template>

<script>
import serialize from 'form-serialize'
import { post } from 'axios'
import { mapActions } from 'vuex'

export default {
  data: () => ({ success: null, loading: false, invalid: false }),
  watch: {
    loading (l) { this.transition(l) }
  },
  methods: {
    ...mapActions(['transition']),
    async submit (e) {
      const { target } = e
      if (!target.checkValidity()) return (this.invalid = true)
      this.invalid = false
      const data = serialize(target, { hash: true })
      this.loading = true
      try {
        await post(target.action, data)
        this.success = true
      } catch (err) {
        this.success = false
      }
      this.loading = false
    },
    reset (resetForm = true) {
      this.invalid = false
      this.success = null
      if (resetForm) this.$refs.form.reset()
    }
  }
}
</script>

<style lang="sass">
form
  max-width: 500px

  &.loading
    opacity: .5
    pointer-events: none

h4
  margin-bottom: 1.2em

input,
textarea
  display: block
  background-color: transparent
  border: 0
  border-bottom: 1px solid white
  padding: 10px 0
  margin-bottom: 20px
  width: 100%

textarea
  resize: vertical
  min-height: 150px

button
  border: 0
  background: transparent
  cursor: pointer
  display: inline-block
  padding: 0
  margin-top: 20px
  position: relative

  &::after
    content: ''
    position: absolute
    left: 0
    height: 1px
    bottom: -1px
    background-color: white
    right: 0
    transition: right .2s ease-out

  &[type='submit']
    float: right
    margin-top: 0
</style>
