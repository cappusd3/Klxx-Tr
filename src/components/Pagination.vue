<template lang="jade">
  div.pagination
    Page(:total="total" show-total)
</template>

<script>
export default {
  props: {
    total: Number
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
  .pagination {
    margin-top: 1rem;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -moz-justify-content: center;
    -webkit-justify-content: center;
    justify-content: center;
  }
</style>
