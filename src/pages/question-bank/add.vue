<template lang="jade">
  div.question-bank-add
    breadcrumb.breadcrumb(:breadcrumb="breadcrumb")
    Row.sub-panel(type="flex" justify="start" align="bottom" style="margin-top: 1rem;")
      Col(span="4")
        .label-select
          span(class="label") 科目
          Select(v-model="subject" size="small" style="width:100px")
            Option(v-for="item in subjectInfo.subjectList" v-bind:value="item.value" v-bind:key="item.value") {{item.label}}
      Col(span="4")
        .label-select
          span(class="label") 学段
          Select(v-model="period" size="small" style="width:100px")
            Option(v-for="item in periodInfo.periodList" v-bind:value="item.value" v-bind:key="item.value") {{item.label}}
      Col(span="4")
        .label-select
          span(class="label") 时间
          Select(v-model="year" size="small" style="width:100px")
            Option(v-for="item in yearInfo.years" v-bind:value="item.value" v-bind:key="item.value") {{item.label}}
      Col(span="4")
        .label-select
          span(class="label") 地区
          Select(v-model="region" size="small" style="width:100px")
            Option(v-for="item in regionInfo.regionList" v-bind:value="item.value" v-bind:key="item.value") {{item.label}}
      Col(span="4")
        .label-select
          span(class="label") 题型
          Select(v-model="itemType" size="small" style="width:100px")
            Option(v-for="item in itemTypeInfo.itemTypeList" v-bind:value="item.value" v-bind:key="item.value") {{item.label}}
      Col(span="4")
        .label-select
          span(class="label") 难度
          Select(v-model="diffLevel" size="small" style="width:100px")
            Option(v-for="item in diffLevelInfo.diffLevelList" v-bind:value="item.value" v-bind:key="item.value") {{item.label}}
</template>

<script>
import breadcrumb from '@/components/Breadcrumb.vue'
import { mapGetters } from 'vuex'

export default {
  components: {breadcrumb},
  created () {
    this.$store.dispatch('getSubjectInfo')
    this.$store.dispatch('getPeriodInfo')
    this.$store.dispatch('getRegionInfo')
    this.$store.dispatch('getYearInfo')
    this.$store.dispatch('getItemTypeInfo')
    this.$store.dispatch('getDiffLevelInfo')
  },
  computed: {
    ...mapGetters([
      'subjectInfo',
      'periodInfo',
      'regionInfo',
      'yearInfo',
      'itemTypeInfo',
      'diffLevelInfo'
    ])
  },
  data () {
    return {
      subject: '',
      period: '',
      region: '',
      year: '',
      diffLevel: '',
      itemType: '',
      breadcrumb: [{
        id: 1,
        label: '题库'
      }, {
        id: 2,
        label: '添加题目'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.question-bank-add {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  flex-direction: column;

  .sub-panel {
    margin-top: 1rem;

    .label {
      padding-right: 10px;
    }
  }

}
</style>
