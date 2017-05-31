<template>
  <div class="watcher">
    <h1>{{ title }}</h1>
    <p>
      ask a yes/no question:
      <input type="text" name="question" placeholder="say it" v-model="question">
    </p>
    <p>{{ answer }}</p>

  </div>
</template>

<script>
import _ from 'lodash'
import axio from 'axios'
export default {
  name: 'watcher',
  data () {
    return {
      title: '观察watch属性',
      question: '',
      answer: 'I cannot give you an answer until you ask a question!'
    }
  },
  created () {
    // created 这个钩子在实例被创建之后被调用
    // mounted、 updated 、destroyed 这些钩子的生命周期
    console.log('name is:' + this.title)
  },
  watch: {
    question (newQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.getAnswer()
    }
  },
  methods: {
    getAnswer: _.debounce(
      function () {
        var vm = this
        if (this.question.indexOf('?') === -1) {
          vm.answer = 'Question usually contain a question mark.;-)'
          return
        }
        vm.answer = 'Thiiiiink...'
        axio.get('https://yesno.wtf/api')
          .then((response) => {
            vm.answer = _.capitalize(response.data.answer)
          })
          .catch((error) => {
            vm.answer = 'Error! Could not reach the API. ' + error
          })
      },
      1000
    )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  p {
    color: '#2a333c';
  }
</style>
