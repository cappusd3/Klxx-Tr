<template lang="jade">
  div.paper-add
    breadcrumb.breadcrumb(:breadcrumb="breadcrumb")
    //- 添加试卷的表单
    Form(ref="formValidate" v-bind:model="formValidate" v-bind:rules="ruleValidate" v-bind:label-width="80")
      Row.sub-panel(type="flex" justify="start" align="bottom" style="margin-top: 2rem;")
        Col(span="6" offset="2")
          Form-item(label="试卷名称" prop="paperName")
            Input(v-model="formValidate.paperName" size="small" placeholder="请输入试卷名称" style="width: 300px;")
      Row.sub-panel(type="flex" justify="start" align="bottom")
        Col(span="6" offset="2")
          Form-item(label="年份" prop="year")
            Select(v-model="formValidate.year" size="small" style="width:200px")
              Option(v-for="item in yearInfo.years" v-bind:value="item.value" v-bind:key="item.value") {{item.label}}
        Col(span="6" offset="2")
          Form-item(label="地区" prop="region")
            Select(v-model="formValidate.region" size="small" style="width:200px")
              Option(v-for="item in regionInfo.regionList" v-bind:value="item.value" v-bind:key="item.value") {{item.label}}
      Row.sub-panel(type="flex" justify="start" align="bottom")
        Col(span="6" offset="2")
          Form-item(label="科目" prop="subject")
            Select(v-model="formValidate.subject" size="small" style="width:200px")
              Option(v-for="item in subjectInfo.subjectList" v-bind:value="item.value" v-bind:key="item.value") {{item.label}}
        Col(span="6" offset="2")
          Form-item(label="学段" prop="period")
            Select(v-model="formValidate.region" size="small" style="width:200px")
              Option(v-for="item in periodInfo.periodList" v-bind:value="item.value" v-bind:key="item.value") {{item.label}}
      Row.sub-panel(type="flex" justify="start" align="bottom")
        Col(span="6" offset="2")
          Form-item(label="")
            Upload(action="//jsonplaceholder.typicode.com/posts/")
              Button(type="ghost" icon="ios-cloud-upload-outline") 上传tex源文件
      Row.sub-panel(type="flex" justify="start" align="bottom")
        Col(span="20" offset="2")
          Form-item(label="试卷图片(png格式)")
            images-upload(ref="uploadImagesList")
      Row.sub-panel(type="flex" justify="start" align="bottom")
        Col(span="6" offset="2")
          Form-item
            Button(type="primary" @click="handleSubmit('formValidate')") 解析
    //- 这里是解析成功后的列表
    .paper-compiled-list(style="margin-top: 1rem;")
      p 这里是解析成功列表1
      tr-table(:columns="columns" v-bind:data="itemList")
      Row.buttons-panel(type="flex" justify="center" align="bottom" style="margin-top: 2rem;")
        Col
          Button(type="ghost") 预览试卷
        Col(offset="1")
          Button(type="primary") 确定
        Col(offset="1")
          Button() 取消
</template>

<script>
import breadcrumb from '@/components/Breadcrumb.vue'
import imagesUpload from '@/components/ImagesUpload.vue'
import trTable from '@/components/Table.vue'

import { mapGetters } from 'vuex'

export default {
  components: {breadcrumb, imagesUpload, trTable},
  created () {
    this.$store.dispatch('getSubjectInfo')
    this.$store.dispatch('getPeriodInfo')
    this.$store.dispatch('getRegionInfo')
    this.$store.dispatch('getYearInfo')
    this.$store.dispatch('getItemTypeInfo')
  },
  computed: {
    ...mapGetters([
      'subjectInfo',
      'periodInfo',
      'regionInfo',
      'yearInfo',
      'itemTypeInfo'
    ])
  },
  methods: {
    // handleFile () {
    //   // console.log('handleFile')
    //   var params = {
    //     'paperName': this.paperName,
    //     'region': this.region,
    //     'period': this.period,
    //     'subject': this.subject,
    //     'year': this.year,
    //     'itemType': this.itemType
    //   }
    //   console.log(params)
    //   console.log(this.$refs.uploadImagesList.uploadList[0])
    // },
    handleSubmit (name) {
      console.log(this.formValidate)
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('提交成功!')
        } else {
          this.$Message.error('表单验证失败!')
        }
      })
    }
  },
  data () {
    return {
      formValidate: {
        paperName: '',
        region: '',
        period: '',
        subject: '',
        year: '',
        itemType: ''
      },
      ruleValidate: {
        paperName: [{
          required: true,
          message: '试卷名不能为空',
          trigger: 'blur'
        }],
        region: [{
          required: false,
          message: '请选择地区',
          trigger: 'change'
        }],
        period: [{
          required: true,
          message: '请选择学段',
          trigger: 'change'
        }],
        subject: [{
          required: true,
          message: '请选择学科',
          trigger: 'change'
        }],
        year: [{
          required: false,
          message: '请选择时间',
          trigger: 'blur'
        }],
        itemType: [{
          required: true,
          message: '请选择题型',
          trigger: 'change'
        }]
      },
      itemList: [{
        index: 1,
        itemType: '选择题',
        content: 'hello 这里是题目内容',
        status: 'INIT'
      }],
      breadcrumb: [{
        id: 1,
        label: '试卷库'
      }, {
        id: 2,
        label: '添加试卷'
      }],
      columns: [{
        title: '序号',
        key: 'index',
        align: 'center',
        width: 100
      }, {
        title: '题型',
        key: 'itemType',
        align: 'center',
        width: 120
      }, {
        title: '题干',
        key: 'content',
        align: 'center'
      }, {
        title: '是否录入标签',
        key: 'status',
        align: 'center',
        width: 200
      }, {
        title: '操作',
        key: 'action',
        width: 200,
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
                type: 'primary',
                size: 'small'
              },
              style: {
                marginRight: '5px'
              },
              on: {
                click: () => {
                  this.edit(params.index)
                }
              }
            }, '编辑'),
            h('Button', {
              props: {
                type: 'primary',
                size: 'small'
              },
              on: {
                click: () => {
                  this.add(params.index)
                }
              }
            }, '录入标签')
          ])
        }
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.paper-add {
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
    // margin-top: 1rem;

    .label {
      padding-right: 10px;
    }
  }

}
</style>
