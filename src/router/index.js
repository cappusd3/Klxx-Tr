import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/components/Hello'
// import Watcher from '@/components/Watcher'
import Home from '@/pages/Home'
// import Subject from '@/pages/basic/subject.vue'
import QuestionBankIndex from '@/pages/question-bank/index.vue'
import AddQuestion from '@/pages/question-bank/add.vue'
import PaperIndex from '@/pages/paper/index.vue'
import AddPaper from '@/pages/paper/add.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/hello',
      name: 'hello',
      component: Hello
    },
    {
      path: '/questionBank',
      name: 'questionBank',
      component: QuestionBankIndex
    },
    {
      path: '/questionBank/add',
      name: 'AddQuestion',
      component: AddQuestion
    }, {
      path: '/paper',
      name: 'paper',
      component: PaperIndex
    }, {
      path: '/paper/add',
      name: 'paperAdd',
      component: AddPaper
    }
  ]
})
