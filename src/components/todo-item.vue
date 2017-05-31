<template lang="html">
  <li>{{ todo.text }}</li>
</template>

<script>
export default {
  props: ['todo']
}
</script>

<style lang="css">
  li {
    list-style-type: none;
    padding: 0;
  }
</style>
