import Vuex from 'vuex'

const store = new Vuex.Store({
  state: {
    transitioning: false
  },
  actions: {
    transition ({ dispatch, commit, state: { transitioning } }, repeat = false) {
      if (transitioning) clearTimeout(transitioning)
      const t = setTimeout(() => {
        commit('setTransition', false)
        if (repeat) setImmediate(() => dispatch('transition', true))
      }, 1500)
      commit('setTransition', t)
    }
  },
  mutations: {
    setTransition (state, t) {
      state.transitioning = t
    }
  }
})

export default store
