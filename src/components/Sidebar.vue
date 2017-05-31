<template lang="jade">
  Menu(v-bind:active-name="activeName" width="auto" @on-select="selectEvent")
    Submenu(:name="group.id" v-for="group of groups" v-bind:key="group.id")
      template(slot="title")
        Icon(:type="group.icon")
        | {{group.title}}
      Menu-item(:name="item.name" v-for="item of group.links" v-bind:key="item.name")
        Icon(:type="item.icon")
        | {{item.label}}
</template>

<script>
export default {
  name: 'Sidebar',
  data () {
    return {
      title: 'welcome to the csd of sidebar2',
      theme: 'light',
      activeName: '',
      groups: [{
        id: '1',
        title: '内容管理',
        icon: 'ios-paper',
        links: [{
          label: '文章管理',
          icon: 'document-text',
          name: 'hello',
          url: 'mgt'
        }, {
          label: '评论管理',
          icon: 'chatbubbles',
          name: 'home',
          url: 'mgt'
        }]
      }, {
        id: '2',
        icon: 'stats-bars',
        title: '试卷库',
        links: [{
          label: '题库',
          icon: 'heart',
          name: 'questionBank',
          url: ''
        }, {
          label: '试卷库',
          icon: 'heart-broken',
          name: 'paper',
          url: ''
        }]
      }]
    }
  },
  methods: {
    selectEvent (key) {
      this.$router.push({name: key})
    }
  }
}
</script>

<style lang="scss">

</style>
