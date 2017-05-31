<template lang="jade">
  Modal(
    v-model="modal1"
    v-bind:title="title"
    @on-ok="ok"
    @on-cancel="cancel")
    p 这里是内容
</template>

<script>
export default {
  props: {
    modal: Boolean,
    title: String
  },
  methods: {
    ok () {
      this.$emit('ok')
      // this.$Message.info('点击了确定')
    },
    cancel () {
      this.$emit('cancel')
      // this.modal = false
      // this.$Message.info('点击了取消')
    }
  },
  computed: {
    modal1 () {
      return this.modal
    }
  }
}
</script>

<style lang="scss">

</style>
