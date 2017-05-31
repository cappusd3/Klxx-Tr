<template lang="jade">
  div.table
    Table(border v-bind:columns="columns" v-bind:data="data" width="auto")
</template>

<script>
export default {
  props: {
    columns: Array,
    data: Array
  },
  data () {
    return {
    }
  },
  methods: {},
  components: {}
}
</script>

<style lang="scss" scope>
  .table {
    margin-top: 1rem;
  }
</style>
