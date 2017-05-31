import Vue from 'vue'
import Vuex from 'vuex'

import questionBank from './modules/questionBank'
import common from './modules/common'
import paper from './modules/paper'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    common,
    questionBank,
    paper
  }
})
