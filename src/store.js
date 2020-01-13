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
  // 游戏下载弹窗信息
  downloadInfo: {},
  // 是否显示游戏下载弹窗
  showDownloadInfo: false
}

const getters = {
  appType(state) {
    return state.appType
  },
  gameInfo(state) {
    return state.gameInfo
  },
  gameType(state) {
    return state.gameType
  },
  downloadInfo(state) {
    return state.downloadInfo
  },
  showDownloadInfo(state) {
    return state.showDownloadInfo
  }
}

const mutations = {
  setGameInfo(state, gameInfo) {
    state.gameInfo = gameInfo;
  },
  setGameType(state, gameType) {
    state.gameType = gameType;
  },
  setSubscribed(state) {
    Object.defineProperty(state.gameInfo, {subscribe: 0});
  },
  setDownloadInfo(state, downloadInfo) {
    state.downloadInfo = downloadInfo;
  },
  setShowDownloadInfo(state, showDownloadInfo) {
    state.showDownloadInfo = showDownloadInfo;
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
})
