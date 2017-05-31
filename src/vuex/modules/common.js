import * as types from '@/vuex/mutation-types'
import api from '@/fetch/common/api'

const state = {
  subjectInfo: {},
  periodInfo: {},
  gradeInfo: {},
  regionInfo: {},
  yearInfo: {},
  itemTypeInfo: {},
  diffLevelInfo: {}
}

const getters = {
  subjectInfo: state => state.subjectInfo,
  periodInfo: state => state.periodInfo,
  gradeInfo: state => state.gradeInfo,
  regionInfo: state => state.regionInfo,
  difficultyTypeInfo: state => state.difficultyTypeInfo,
  yearInfo: state => state.yearInfo,
  itemTypeInfo: state => state.itemTypeInfo,
  diffLevelInfo: state => state.diffLevelInfo
}

const actions = {
  // 获取学科
  getSubjectInfo ({commit}, res) {
    api.SubjectInfo()
      .then(res => {
        console.log('subject: ' + res)
        commit(types.GET_SUBJECK_INFO, res)
      })
  },
  // 获取学段
  getPeriodInfo ({commit}, res) {
    api.PeriodInfo()
      .then(res => {
        console.log('period: ' + res)
        commit(types.GET_PERIOD_INFO, res)
      })
  },
  // 获取年级
  getGradeInfo ({commit}, res) {
    api.GradeInfo()
      .then(res => {
        console.log('grade: ' + res)
        commit(types.GET_GRADE_INFO, res)
      })
  },
  // 获取地区
  getRegionInfo ({commit}, res) {
    api.RegionInfo()
      .then(res => {
        console.log('regionInfo' + res)
        commit(types.GET_REGION_INFO, res)
      })
  },
  // 获取题型
  getItemTypeInfo ({commit}, res) {
    api.itemTypeInfo()
      .then(res => {
        console.log('itemTypeInfo' + res)
        commit(types.GET_ITEM_TYPE_INFO, res)
      })
  },
  // 获取年份
  getYearInfo ({commit}, res) {
    api.YearInfo()
    .then(res => {
      console.log('YearInfo' + res)
      commit(types.GET_YEAR_INFO, res)
    })
  },
  // 难度列表
  getDiffLevelInfo ({commit}, res) {
    api.diffLevelInfo()
      .then(res => {
        console.log('diffLevelInfo' + res)
        commit(types.GET_DIFFICULTY_TYPE_INFO, res)
      })
  }
}

const mutations = {
  [types.GET_SUBJECK_INFO] (state, res) {
    state.subjectInfo = res
  },
  [types.GET_PERIOD_INFO] (state, res) {
    state.periodInfo = res
  },
  [types.GET_GRADE_INFO] (state, res) {
    state.gradeInfo = res
  },
  [types.GET_REGION_INFO] (state, res) {
    state.regionInfo = res
  },
  [types.GET_YEAR_INFO] (state, res) {
    state.yearInfo = res
  },
  [types.GET_ITEM_TYPE_INFO] (state, res) {
    state.itemTypeInfo = res
  },
  [types.GET_DIFFICULTY_TYPE_INFO] (state, res) {
    state.diffLevelInfo = res
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
