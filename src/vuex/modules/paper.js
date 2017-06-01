import * as types from '@/vuex/mutation-types'
import api from '@/fetch/paper/api'

const state = {
  paperList: [],
  paperTotal: 0,
  paperInfoList: [],
  paperConfig: {}
}

const getters = {
  paperList: state => state.paperList,
  paperTotal: state => state.paperTotal,
  paperInfoList: state => state.paperInfoList,
  paperConfig: state => state.paperConfig
}

const actions = {
  // 获取试卷库列表
  getPaperList ({commit}, res) {
    api.PaperList()
      .then(res => {
        commit(types.GET_PAPER_LIST, res)
      })
  },
  getPaperDetail ({commit}, res) {
    api.PaperDetail()
      .then(res => {
        console.log('GET_PAPER_DETAIL')
        commit(types.GET_PAPER_DETAIL, res)
      })
  }
}

const mutations = {
  [types.GET_PAPER_LIST] (state, res) {
    state.paperList = res.data.paperList
    state.paperTotal = res.total
  },
  [types.GET_PAPER_DETAIL] (state, res) {
    state.paperInfoList = res.data.paperInfo
    state.paperConfig = res.data.paper
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
