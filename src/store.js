import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  // APP类型(1为普通盒子，5为H5盒子)
  appType: 1,
  // 目前详情页游戏的相关信息
  gameInfo: {},
  // 游戏类型（普通、预约、已预约、H5）
  gameType: 1,
}

const getters = {
  gameInfo(state) {
    return state.gameInfo
  },
  gameType(state) {
    return state.gameType
  }
}

const mutations = {
  setGameInfo(state, gameInfo) {
    state.gameInfo = gameInfo;
  },
  setGameType(state, gameType) {
    state.gameType = gameType;
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
})
