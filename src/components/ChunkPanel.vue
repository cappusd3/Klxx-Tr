<template lang="jade">
  Row.chunk-panel(type="flex" justify="start")
    Col(span="2")
      span.label {{title}}:
    Col(span="17")
      span(v-for="item in items" v-bind:key="item.value") {{item.label}}
    Col(span="4")
      span(@click="show") {{btnTitle}}
</template>

<script>
export default {
  props: {
    items: Array,
    title: String
  },
  data () {
    return {
      btnTitle: '更多',
      showMore: false
    }
  },
  watch: {
  },
  filters: {
  },
  methods: {
    show () {
      this.showMore = !this.showMore
      if (!this.showMore) {
        this.btnTitle = '更多'
      } else {
        this.btnTitle = '收起啦'
      }
    }
  }
}
</script>

<style lang="scss">
  .chunk-panel {

    span {
      color: #666;
      display: inline-block;
      height: 2rem;
      line-height: 2rem;
      border-radius: 5px;
      padding: 0 1rem;
      font-size: 1.4rem;
      margin-right: 2rem;
      margin-top: 2rem;
      border: 1px solid #ddd;

      &.label {
        border: none;
        padding: 0;
      }
    }

  }
</style>
