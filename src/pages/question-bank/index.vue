<template lang="jade">
  div.question-bank
    breadcrumb.breadcrumb(:breadcrumb="breadcrumb")
    Row.sub-panel(type="flex" justify="start" align="bottom")
      Col(span="4")
        .label-select
          span(class="label") {{subjectInfo.subjectTitle}}
          Select(v-model="subject" size="small" style="width:100px")
            Option(v-for="item in subjectInfo.subjectList" v-bind:value="item.value" v-bind:key="item.value") {{item.label}}
      Col(span="4")
        .label-select
          span(class="label") {{periodInfo.periodTitle}}
          Select(v-model="period" size="small" style="width:100px")
            Option(v-for="item in periodInfo.periodList" v-bind:value="item.value" v-bind:key="item.value") {{item.label}}
      Col(span="4")
        .label-select
          span(class="label") {{gradeInfo.gradeTitle}}
          Select(v-model="grade" size="small" style="width:100px")
            Option(v-for="item in gradeInfo.gradeList" v-bind:value="item.value" v-bind:key="item.value") {{item.label}}
      Col(span="8" offset="4")
        Input.search-input(icon="search" placeholder="请输入关键字" v-model="keyword" @on-click="handleIconClick")

    .filter-panel
      tr-chunk.chunk(v-bind:items="yearInfo.years" v-bind:title="yearInfo.yearTitle")
      tr-chunk.chunk(v-bind:items="regionInfo.regionList" v-bind:title="regionInfo.regionTitle")
    //- 列表
    tr-table.table(:columns="columns" v-bind:data="questionBankList")
    tr-pagination.pagination(:total="total")
</template>

<script>
import breadcrumb from '@/components/Breadcrumb.vue'
import trTable from '@/components/Table.vue'
import trPagination from '@/components/Pagination.vue'
// import trSelect from '@/components/Select.vue'
import trChunk from '@/components/ChunkPanel.vue'

import { mapGetters } from 'vuex'

export default {
  name: 'vSidebar',
  components: {breadcrumb, trTable, trPagination, trChunk},
  methods: {
    handleIconClick () {
      console.log('handleIconClick')
      console.log(this.periodInfo.periodList)
    },
    show (index) {
      this.$Modal.info({
        title: '用户信息',
        content: `姓名：${this.questionBankList[index].name}<br>年龄：${this.questionBankList[index].age}<br>地址：${this.questionBankList[index].address}`
      })
    },
    remove (index) {
      this.questionBankList.splice(index, 1)
    }
  },
  created () {
    this.$store.dispatch('getSubjectInfo')
    this.$store.dispatch('getPeriodInfo')
    this.$store.dispatch('getGradeInfo')
    this.$store.dispatch('getQuestionBankList')
    this.$store.dispatch('getRegionInfo')
    this.$store.dispatch('getYearInfo')
  },
  computed: {
    ...mapGetters([
      'questionBankList',
      'subjectInfo',
      'periodInfo',
      'gradeInfo',
      'regionInfo',
      'yearInfo'
    ])
  },
  data () {
    return {
      breadcrumb: [{
        id: 1,
        label: '题库'
      }, {
        id: 2,
        label: '列表'
      }],
      keyword: '',
      subject: '',
      period: '',
      grade: '',
      columns: [{
        title: '操作',
        key: 'action',
        width: 150,
        align: 'center',
        render: (h, params) => {
          return h('div', [
            h('Button', {
              props: {
                type: 'primary',
                size: 'small'
              },
              style: {
                marginRight: '5px'
              },
              on: {
                click: () => {
                  this.show(params.index)
                }
              }
            }, '查看'),
            h('Button', {
              props: {
                type: 'error',
                size: 'small'
              },
              on: {
                click: () => {
                  this.remove(params.index)
                }
              }
            }, '删除')
          ])
        }
      }, {
        title: '题型',
        key: 'itemType',
        align: 'center'
      }, {
        title: '题干',
        key: 'content',
        align: 'center'
      }, {
        title: '难度',
        key: 'diffLevel',
        align: 'center'
      }, {
        title: '考点',
        key: 'points',
        align: 'center'
      }, {
        title: '时间',
        key: 'year',
        align: 'center'
      }, {
        title: '地区',
        key: 'region',
        align: 'center'
      }, {
        title: '科目',
        key: 'subject',
        align: 'center'
      }, {
        title: '年段',
        key: 'grade',
        align: 'center'
      }, {
        title: '创建时间',
        key: 'createTime',
        align: 'center',
        width: 150
      }, {
        title: '启动状态',
        key: 'status',
        align: 'center'
      }],
      total: 100
    }
  }

}
</script>

<style lang="scss" scope>
  .question-bank {
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

    .filter-panel {
      padding: 0 2rem 1.5rem;
      margin-top: 10px;
      border: 1px solid #ddd;

      .chunk:not(:last-child) {
        border-bottom: 1px solid rgba(0,0,0,.04);
        padding-bottom: 1.3rem;
      }
    }

    .table {
      -webkit-box-flex: 1;
      -moz-box-flex: 1;
      -ms-flex: 1;
      flex: 1;
    }

  }
</style>
