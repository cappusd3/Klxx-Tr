<template lang="jade">
  //- .label-select
  //-   span(class="label") {{title}}
  //-   Select(v-model="value" size="small" style="width:100px")
  //-     Option(v-for="item in items" v-bind:value="item.value" v-bind:key="item.value") {{item.label}}
</template>

<script>
export default {
  props: {
    title: String,
    value: String,
    items: Array
  }
}
</script>

<style lang="scss">

</style>
