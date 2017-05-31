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
  }
}
