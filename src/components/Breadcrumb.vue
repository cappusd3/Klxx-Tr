<template lang="jade">
  #layout-breadcrumb
    Breadcrumb
      Breadcrumb-item(v-for="item of breadcrumb" v-bind:key="item.id") {{item.label}}
      //- Breadcrumb-item 科目管理
</template>

<script>
export default {
  props: {
    breadcrumb: Array
  }
}
</script>

<style lang="scss">

</style>
