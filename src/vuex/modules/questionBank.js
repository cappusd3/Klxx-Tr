import * as types from '@/vuex/mutation-types'
import api from '@/fetch/questionBank/api'

const state = {
  questionBankList: []
}

const getters = {
  questionBankList: state => state.questionBankList
}

const actions = {
  // 获取题库列表
  getQuestionBankList ({commit}, res) {
    api.QuestionBankList()
      .then(res => {
        console.log(res)
        commit(types.GET_QUESTION_BANK_LIST, res.itemList)
      })
  }
}

const mutations = {
  [types.GET_QUESTION_BANK_LIST] (state, res) {
    state.questionBankList = res
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
