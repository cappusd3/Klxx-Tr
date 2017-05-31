<!--
  1. vue 也提供了watch来观察和响应vue实例上的数据变动。
  2. computed属性 或许会比 watch属性更好用些。
  3. 若数据变化响应时，执行异步操作或许开销较大的操作。用watch很有用？？
-->
<template lang="html">
  <div id="fullname">
    <input type="text" v-model="firstName" placeholder="edit me">
    <p>{{fullName}}</p>
  </div>
</template>

<script>
export default {
  name: 'fullname',
  data () {
    return {
      firstName: 'chan',
      lastName: 'sd'
    }
  },
  computed: {
    // 计算属性默认只有getter
    fullName () {
      return this.firstName + ' ' + this.lastName
    }
  }
}

// export default {
//   name: 'fullname',
//   data () {
//     return {
//       firstName: 'chan',
//       lastName: 'sd',
//       fullName: 'chan sd2'
//     }
//   },
//   watch: {
//     firstName: function (val) {
//       this.fullName = val + ' ' + this.lastName
//     },
//     lastName: function (val) {
//       this.fullName = this.firstName + ' ' + val
//     }
//   }
// }

</script>



<style lang="css">
  p {
    color: #42b983;
  }
</style>
