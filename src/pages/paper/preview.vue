<template lang="jade">
  div.paper-preview
    breadcrumb.breadcrumb(:breadcrumb="breadcrumb")
    Row.paper-detail(type="flex" justify="center")
      Col(span="20")
        .paper-config
          Row(type="flex" justify="center" align="bottom" style="margin-top: 2rem;")
            Col()
              Input.main-title(v-model="paperConfig.mainTitle" placeholder="请输入..." style="width: 300px;")
          Row(type="flex" justify="center" align="bottom" style="margin-top: 2rem;")
            Col()
              Input.sub-title(v-model="paperConfig.subTitle" placeholder="请输入..." style="width: 300px; font-size: 1.6rem;")
          Row.paper-score(type="flex" justify="center" align="bottom" style="margin-top: 2rem;")
            Col()
              span (&nbsp;试卷满分：
              Input(v-model="paperConfig.totalScore" number placeholder="请输入..." style="width: 50px")
              span 分
            Col()
              span 考试时间：
              Input(v-model="paperConfig.totalScore" number placeholder="请输入..." style="width: 50px")
              span 分&nbsp;)
          Row(type="flex" justify="center" align="bottom" style="margin-top: 2rem;")
            Col
              span.stu-info 准考证号
              Input.stu-input(v-model="paperConfig.ticketCode" style="width: 100px; padding-left: .5rem;")
            Col
              span.stu-info 姓名
              Input.stu-input(v-model="paperConfig.studentName" style="width: 100px; padding-left: .5rem;")
            Col
              span.stu-info 座位号
              Input.stu-input(v-model="paperConfig.seatName" style="width: 100px; padding-left: .5rem;")
        .paper-content
          Row(type="flex" justify="start" align="bottom" style="margin-top: 2rem;" v-for="(paperField, index) of paperInfoList" v-bind:key="paperField.id")
            Col()
              label(style="font-size: 1.6rem;") {{index | uppercaseNum}} {{paperField.template.itemTypeName}}(本大题{{paperField.template.itemCount}}道题,共{{paperField.template.totalScore}}分)
              Row.item-list(v-for="(item, itemIndex) in paperField.itemList" v-bind:key="item.itemId")
                Col()
                  p
                    span {{itemIndex + 1}},
                    span(style="margin-left: 5px;") {{item.content}}
                  Row.options-list(v-for="option of item.options" v-bind:key="option.optionCode" v-if="paperField.template.itemCode == 'danxuan' || paperField.template.itemCode == 'duoxuan'")
                    Col()
                      span {{option.optionCode}}
                      span(style="margin-left: 1rem;") {{option.content}}

</template>

<script>
import breadcrumb from '@/components/Breadcrumb.vue'
import { mapGetters } from 'vuex'

export default {
  components: {breadcrumb},
  created () {
    this.$store.dispatch('getPaperDetail')
  },
  computed: {
    ...mapGetters([
      'paperInfoList',
      'paperConfig'
    ])
  },
  data () {
    return {
      breadcrumb: [{
        id: 1,
        label: '试卷预览'
      }]
    }
  },
  filters: {
    uppercaseNum (value) {
      switch (value) {
        case 0:
          return '一'
        case 1:
          return '二'
        case 2:
          return '三'
        case 3:
          return '四'
        case 4:
          return '五'
        case 5:
          return '六'
        default:
          return ''
      }
    }
  }
}
</script>

<style lang="scss">
.paper-preview {
  overflow-y: auto;
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

  Input {
    text-align: center;
    border-width: 0 0 1px;
    color: rgba(0,0,0,0.87);
    border-color: rgba(0,0,0,0.12);
    line-height: 26px;
    height: 30px;
  }

  .main-title input {
    font-size: 2rem;
  }

  .sub-title input {
    font-size: 1.6rem;
  }

  .paper-score {
    font-size: 1.5rem;
  }

  .item-list {
    margin-top: 1rem;

    .ivu-col {
      margin-top: 1rem;
      left: 1rem;

      .stu-info {
        padding-left: 1rem;
        position: relative;
        top: 6px;
        font-size: 1.5rem;
      }
    }
  }
}
</style>
