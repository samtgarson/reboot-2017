import Vuex from 'vuex'

const store = new Vuex.Store({
  state: {
    transitioning: false
  },
  actions: {
    transition ({ commit, state: { transitioning } }) {
      if (transitioning) clearTimeout(transitioning)
      const t = setTimeout(() => {
        commit('setTransition', false)
      }, 1200)
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
