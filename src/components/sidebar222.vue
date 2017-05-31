<template lang="jade">
  Menu(:theme="theme" v-bind:active-name="activeName" width="auto")
    Menu-group(:title="group.title" v-for="group of groups" v-bind:key="group.id")
        Menu-item(:name="item.name" v-for="item of group.links" v-bind:key="item.name")
          Icon(:type="item.icon")
          {{item.label}}
</template>

<script>
export default {
  name: 'vSidebar',
  data () {
    return {
      title: 'welcome to the csd of sidebar',
      theme: 'light',
      activeName: 1,
      groups: [{
        id: 1,
        title: '内容管理',
        links: [{
          label: '文章管理',
          icon: 'document-text',
          name: 1
        }, {
          label: '评论管理',
          icon: 'chatbubbles',
          name: 2
        }]
      }, {
        id: 2,
        title: '统计分析',
        links: [{
          label: '用户留存',
          icon: 'heart',
          name: 3
        }, {
          label: '流失用户',
          icon: 'heart-broken',
          name: 4
        }]
      }]
    }
  }
}
</script>

<style lang="scss">

</style>
