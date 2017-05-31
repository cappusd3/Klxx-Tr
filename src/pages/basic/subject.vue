<template lang="jade">
  div.subject
    breadcrumb.breadcrumb(:breadcrumb="breadcrumb")
    Row.sub-panel(type="flex" justify="space-between")
      Col(span="8")
        Input.search-input(icon="search" placeholder="请输入关键字" v-model="keyword" @on-click="handleIconClick")
      Col()
        Button(type="primary" size="small" @click="openModal") 添加
    tr-table.table(:columns="columns" v-bind:data="data")
    tr-pagination.pagination(:total="total")
    tr-modal(v-bind:modal="modal" v-bind:title="modalTitle" @ok="ok" @cancel="cancel")
</template>

<script>
import breadcrumb from '@/components/Breadcrumb.vue'
import trTable from '@/components/Table.vue'
import trPagination from '@/components/Pagination.vue'
import trModal from '@/components/Modal.vue'

export default {
  name: 'vSidebar2',
  data () {
    return {
      breadcrumb: [{
        id: 1,
        label: '基础数据'
      }, {
        id: 2,
        label: '科目管理'
      }],
      keyword: '',
      columns: [{
        type: 'selection',
        width: 60,
        align: 'center'
      }, {
        title: '地区',
        key: 'zone',
        align: 'center'
      }, {
        title: '地区编码',
        key: 'zoneCode'
      }, {
        title: '排序',
        key: 'sort',
        align: 'center'
      }, {
        title: '启动状态',
        key: 'status',
        align: 'center'
      }, {
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
      }],
      data: [{
        zone: '王小明',
        zoneCode: 18,
        status: '北京市朝阳区芍药居',
        sort: 1
      }, {
        zone: '张小刚',
        zoneCode: 25,
        status: '北京市海淀区西二旗',
        sort: 2
      }, {
        zone: '李小红',
        zoneCode: 30,
        status: '上海市浦东新区世纪大道',
        sort: 3
      }, {
        zone: '周小伟',
        zoneCode: 26,
        status: '深圳市南山区深南大道',
        sort: 4
      }],
      total: 100,
      modal: false,
      modalTitle: '标题'
    }
  },
  methods: {
    handleIconClick () {
      console.log(this.keyword)
    },
    show (index) {
      this.$Modal.info({
        title: '用户信息',
        content: `姓名：${this.data[index].name}<br>年龄：${this.data[index].age}<br>地址：${this.data[index].address}`
      })
    },
    remove (index) {
      this.data.splice(index, 1)
    },
    openModal () {
      this.modal = true
    },
    ok () {
      this.modal = false
      console.log(this.modal)
    },
    cancel () {
      this.modal = false
    }

  },
  components: {breadcrumb, trTable, trPagination, trModal}
}
</script>

<style lang="scss" scope>
  .subject {
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
    }

    .table {
      -webkit-box-flex: 1;
      -moz-box-flex: 1;
      -ms-flex: 1;
      flex: 1;
    }
  }
</style>
