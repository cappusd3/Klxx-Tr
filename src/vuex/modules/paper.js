import * as types from '@/vuex/mutation-types'
import api from '@/fetch/paper/api'

const state = {
  paperList: [],
  paperTotal: 0
}

const getters = {
  paperList: state => state.paperList,
  paperTotal: state => state.paperTotal
}

const actions = {
  // 获取试卷库列表
  getPaperList ({commit}, res) {
    api.PaperList()
      .then(res => {
        commit(types.GET_PAPER_LIST, res)
      })
  }
}

const mutations = {
  [types.GET_PAPER_LIST] (state, res) {
    state.paperList = res.data.paperList
    state.paperTotal = res.total
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
