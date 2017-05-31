<template lang="jade">
  div.paper
    breadcrumb.breadcrumb(:breadcrumb="breadcrumb")
    Row.sub-panel(type="flex" justify="start" align="bottom")
      Col(span="4")
        .label-select
          span(class="label") 科目
          Select(v-model="subject" size="small" style="width:100px")
            Option(v-for="item in subjectInfo.subjectList" v-bind:value="item.value" v-bind:key="item.value") {{item.label}}
      Col(span="8" offset="4")
        Input.search-input(icon="search" placeholder="搜试卷" v-model="keyword" @on-click="searchPaper")
      Col(span="2" offset="6")
        router-link(to="/paper/add")
          Button(type="primary" size="small") 添加试卷

    //- .filter-panel
    //-   tr-chunk.chunk(v-bind:items="yearInfo.years" v-bind:title="yearInfo.yearTitle")
    //-   tr-chunk.chunk(v-bind:items="regionInfo.regionList" v-bind:title="regionInfo.regionTitle")
    //- 列表
    tr-table.table(:columns="columns" v-bind:data="paperList")
    tr-pagination.pagination(:total="paperTotal")
</template>

<script>
import breadcrumb from '@/components/Breadcrumb.vue'
import trTable from '@/components/Table.vue'
import trPagination from '@/components/Pagination.vue'
import trChunk from '@/components/ChunkPanel.vue'
import api from '@/fetch/paper/api'

import { mapGetters } from 'vuex'

export default {
  name: 'vSidebar',
  components: {breadcrumb, trTable, trPagination, trChunk},
  methods: {
    searchPaper () {
      api.PaperList(this.keyword)
        .then(res => {
          this.$Message.success('这是一条成功的提示')
        })
        .catch((err) => {
          this.$Message.error(err.message || 'failed')
        })
    },
    show (index) {
      this.$Modal.info({
        // title: '用户信息',
        // content: `姓名：${this.questionBankList[index].name}<br>年龄：${this.questionBankList[index].age}<br>地址：${this.questionBankList[index].address}`
      })
    },
    remove (index) {
      // this.questionBankList.splice(index, 1)
    }
  },
  created () {
    this.$store.dispatch('getSubjectInfo')
    this.$store.dispatch('getPaperList')
  },
  computed: {
    ...mapGetters([
      'subjectInfo',
      'paperList',
      'paperTotal'
    ])
  },
  data () {
    return {
      breadcrumb: [{
        id: 1,
        label: '试卷库'
      }, {
        id: 2,
        label: '列表'
      }],
      keyword: '',
      subject: '',
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
        title: '试卷名称',
        key: 'paperName',
        align: 'center'
      }, {
        title: '题量',
        key: 'itemCount',
        align: 'center'
      }, {
        title: '类型',
        key: 'paperType',
        align: 'center'
      }, {
        title: '状态',
        key: 'status',
        align: 'center'
      }, {
        title: '创建时间',
        key: 'createTime',
        align: 'center',
        width: 150
      }, {
        title: '创建人',
        key: 'createUser',
        align: 'center'
      }, {
        title: '修改时间',
        key: 'updateTime',
        align: 'center',
        width: 150
      }, {
        title: '修改人',
        key: 'updateUser',
        align: 'center'
      }]
    }
  }

}
</script>

<style lang="scss" scope>
  .paper {
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
