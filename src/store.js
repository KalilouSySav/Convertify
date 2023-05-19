import { createStore } from 'vuex'
import { createApp } from 'vue'

const store = createStore({
  state: {
    // état initial du store
    results: []
  },
  mutations: {
    // mutation pour ajouter un résultat à l'historique des conversions
    addResult(state, result) {
      state.results.push(result)
      console.log(1)
      console.log(state.results)
    }
  },
  actions: {
    // action pour ajouter un résultat à l'historique des conversions
    addResult({ commit }, result) {
      commit('addResult', result)
    }
  }
})

const app = createApp({ /* options */ })
app.use(store)

export default store;