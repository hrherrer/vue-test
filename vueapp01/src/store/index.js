import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    currencies: []
  },
  actions: {
    LOAD_CURRENCIES_LIST: function ({ commit }) {
      return new Promise((resolve, reject) => {
        axios.get('https://api.coinmarketcap.com/v1/ticker/')
        .then((resp) => {
          commit('SET_CURRENCIES_LIST', { currencies: resp.data })
          console.log(resp)
          resolve()
        })
        .catch((err) => {
          console.log(err)
          reject(err)
        })
      })
    }
  },
  mutations: {
    SET_CURRENCIES_LIST: function (state, { currencies }) {
      state.currencies = currencies
    }
  },
  getters: {

  }
})

export default store
