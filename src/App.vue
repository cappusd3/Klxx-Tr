<!-- App.vue 主组件，所有页面都是在App.vue下切换的-->
<template lang="jade">
  #app
    v-head
    .layout-content
      Row.layout-body
        i-col.wrapper-navigate(span="4")
          v-sidebar
        i-col.wrapper-content(span="20")
          router-view
</template>

<script>
import vHead from '@/components/Head.vue'
import vSidebar from '@/components/Sidebar.vue'
export default {
  name: 'app',
  components: {vHead, vSidebar},
  data () {
    return {
      value1: '',
      active: true
    }
  },
  created () {
    // created 这个钩子在实例被创建之后被调用
    // mounted、 updated 、destroyed 这些钩子的生命周期

  },
  computed: {},
  methods: {},
  filters: {}
}
</script>

<style lang="scss">
  @import "style/app"

  ///* 头部导航 */
  // header{z-index: 1000;min-width: 1200px;transition: all 0.5s ease;  border-top: solid 4px #3091F2;  background-color: #fff;  box-shadow: 0 2px 4px 0 rgba(0,0,0,.12),0 0 6px 0 rgba(0,0,0,.04);  }
  // header.header-fixed{position: fixed;top: 0;left: 0;right: 0;}
  // header .el-menu-demo{padding-left: 300px!important;}
  //
  // /* 主内容区 */
  // main{ display: -webkit-box;  display: -ms-flexbox;  display: flex;  min-height: 800px;  border: solid 40px #E9ECF1;  background-color: #FCFCFC;  }
  // main .main-left{text-align: center;width: 200px;float: left;}
  // main .main-right{-webkit-box-flex: 1;  -ms-flex: 1;  flex: 1;  background-color: #fff; padding: 50px 70px; }
  // main .el-menu{background-color: transparent!important;}
</style>
