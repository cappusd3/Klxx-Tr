<!-- App.vue 主组件，所有页面都是在App.vue下切换的-->
<template>
  <div id="app">
    <router-link to="/watcher">
      <button type="button" name="button">jump to watcher</button>
    </router-link>
    <router-link to="/hello">
      <button type="button" name="button">jump back</button>
    </router-link>
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>

    <!-- v-bind:id 等价于 :id -->
    <h1 v-bind:id="name">{{name | capitalize}}</h1>
    <!-- v-on:click 等价于 @click -->
    <button type="button" name="button" v-on:click="toggleSeen">click</button>
    <p v-show="seen">现在你看到我了</p>

    <ol>
      <!-- 现在我们为每个todo-item提供待办项对象 -->
      <!-- 待办项对象是变量，即其内容可以是动态的 -->
      <todoItem v-for="item in groceryList" v-bind:todo="item" :key="item.text"></todoItem>
    </ol>

    <!-- 计算属性：在模板中减少逻辑，否则模板过重难以维护  -->
    <!-- 以下若要在模板中多次反向显示message呢？ -->
    <h3>{{ message.split('').reverse().join('') }}</h3>
    <div class="reverse">
      <p>original message: "{{ message }}"</p>
      <p>computed reversed message "{{ reversedMessage }}"</p>
    </div>

    <!-- computed vs watch 属性 -->
    <watchProperty></watchProperty>


  </div>
</template>

<script>
import todoItem from '@/components/todo-item.vue'
import watchProperty from '@/components/watch-property.vue'

export default {
  name: 'app',
  data () {
    return {
      name: 'hello Maugham!',
      seen: true,
      groceryList: [
        { text: '蔬菜' },
        { text: '奶酪' },
        { text: '随便其他什么人吃的东西' }
      ],
      message: 'chenshangdong3'
    }
  },
  created () {
    // created 这个钩子在实例被创建之后被调用
    // mounted、 updated 、destroyed 这些钩子的生命周期
    console.log('name is:' + this.name)
  },
  computed: {
    // 声明一个计算属性 reversedMessage, 提供的函数将用作属性 vm.reversedMessage 的 getter
    // 计算属性是基于他们的依赖（这里是message) 进行缓存的。也就是只有它的相关依赖发生改变时才会重新求值
    // 若不需要缓存，只要发生重新渲染就更新，可以在methods 下定义 reversedMessage 方法

    // vs watch属性，
    reversedMessage () {
      return this.message.split('').reverse().join('')
    }
  },
  methods: {
    toggleSeen () {
      this.seen = !this.seen
    }
  },
  components: { todoItem, watchProperty },
  filters: {
    capitalize: (value) => {
      if (!value) {
        return ''
      }
      value = value.toString()
      return value.toUpperCase()
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
