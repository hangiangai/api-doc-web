import { createStore } from 'vuex'
import state from './state'
import mutations from './mutations'
import { initTestHistory } from './plugin'

export default createStore({
  state: state,
  mutations: mutations,
  plugins: [initTestHistory],
})
