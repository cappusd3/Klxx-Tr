import axios from 'axios'

// axios 配置
axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// axios.defaults.baseUrl="localhost"

export default {
  // 获取题库列表
  QuestionBankList () {
    return new Promise((resolve, reject) => {
      axios.get('http://oyhfe.com:666/music-data')
        .then(response => {
          response.data = {
            itemList: [{
              itemId: 1,
              itemType: '选择题',
              grade: '初一上',
              diffLevel: '容易',
              createTime: '2017-05-03 12:30:16',
              content: '试题内容',
              year: '2017',
              status: 'AVAILABLE',
              points: 'xxx',
              subject: '数学',
              region: '福建'
            }, {
              itemId: 3,
              itemType: '选择题',
              grade: '初一上',
              diffLevel: '容易',
              createTime: '2017-05-03 12:30:16',
              content: '试题内容',
              year: '2017',
              status: 'AVAILABLE',
              points: 'xxx',
              subject: '数学',
              region: '福建'
            }, {
              itemId: 2,
              itemType: '选择题',
              grade: '初一上',
              diffLevel: '容易',
              createTime: '2017-05-03 12:30:16',
              content: '试题内容',
              year: '2017',
              status: 'AVAILABLE',
              points: 'xxx',
              subject: '数学',
              region: '福建'
            }, {
              itemId: 4,
              itemType: '选择题2',
              grade: '初一上',
              diffLevel: '容易',
              createTime: '2017-05-03 12:30:16',
              content: '试题内容',
              year: '2017',
              status: 'AVAILABLE',
              points: 'xxx',
              subject: '数学',
              region: '福建'
            }]
          }
          resolve(response.data)
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    })
  },
  // 获取试卷库列表
  PaperList () {
    return new Promise((resolve, reject) => {
      var data = [{
        itemId: 1,
        itemType: '选择题',
        grade: '初一上',
        diffLevel: '容易',
        createTime: '2017-05-03 12:30:16',
        content: '试题内容',
        year: '2017',
        status: 'AVAILABLE',
        points: 'xxx',
        subject: '数学',
        region: '福建'
      }]
      resolve(data)
    })
  },
  // 公共基础数据接口
  SubjectInfo () {
    return new Promise((resolve, reject) => {
      axios.get('http://oyhfe.com:666/music-data')
        .then(response => {
          response.data = {
            subjectTitle: '科目',
            subjectList: [{
              value: '',
              label: '全部'
            }, {
              value: 'Math',
              label: '数学'
            }, {
              value: 'English',
              label: '英文'
            }, {
              value: 'History',
              label: '历史'
            }]
          }
          resolve(response.data)
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    })
  },
  PeriodInfo () {
    return new Promise((resolve, reject) => {
      axios.get('http://oyhfe.com:666/music-data')
        .then(response => {
          response.data = {
            periodTitle: '学段',
            periodList: [{
              value: '',
              label: '全部'
            }, {
              value: 'elementarySchool',
              label: '小学'
            }, {
              value: 'juniorSchool',
              label: '初中'
            }, {
              value: 'highSchool',
              label: '高中'
            }]
          }
          resolve(response.data)
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    })
  },
  GradeInfo () {
    return new Promise((resolve, reject) => {
      axios.get('http://oyhfe.com:666/music-data')
        .then(response => {
          response.data = {
            gradeTitle: '年级',
            gradeList: [{
              value: '',
              label: '全部'
            }, {
              value: 'qinianjishang',
              label: '七年级上'
            }, {
              value: 'qinnianjixia',
              label: '七年级下'
            }]
          }
          resolve(response.data)
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    })
  },
  RegionInfo () {
    return new Promise((resolve, reject) => {
      var response = {}
      response['data'] = {
        regionTitle: '地区',
        regionList: [{
          value: '',
          label: '不限'
        }, {
          value: 'fj',
          label: '福建'
        }]
      }
      resolve(response.data)
    })
  },
  YearInfo () {
    return new Promise((resolve, reject) => {
      var response = {}
      response['data'] = {
        yearTitle: '年份',
        years: [{
          value: '',
          label: '不限'
        }, {
          value: '2017',
          label: '2017'
        }, {
          value: '2015',
          label: '2015'
        }, {
          value: '2016',
          label: '2016'
        }, {
          value: '2014',
          label: '2014'
        }, {
          value: '2013',
          label: '2013'
        }, {
          value: '2012',
          label: '2012'
        }, {
          value: '2011',
          label: '这里是'
        }, {
          value: '2010',
          label: '2010'
        }]
      }
      resolve(response.data)
    })
  },
  itemTypeInfo () {
    return new Promise((resolve, reject) => {
      var response = {}
      response['data'] = {
        itemTypeList: [{
          value: '',
          label: '不限'
        }, {
          value: '1',
          label: '选择题'
        }, {
          value: '2',
          label: '解答题'
        }]
      }
      resolve(response.data)
    })
  },
  diffLevelInfo () {
    return new Promise((resolve, reject) => {
      var response = {}
      response['data'] = {
        diffLevelList: [{
          value: '',
          label: '不限'
        }, {
          value: '1',
          label: '简单'
        }]
      }
      resolve(response.data)
    })
  }
}
