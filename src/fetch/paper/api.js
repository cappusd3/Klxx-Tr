import axios from 'axios'

// axios 配置
axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.baseUrl = ''

export default {
  // 获取试卷库列表
  PaperList () {
    return new Promise((resolve, reject) => {
      axios.get('http://oyhfe.com:666/music-data')
        .then(response => {
          response = {
            total: 1,
            currentPage: 1,
            paseSize: 10,
            status: 200,
            error: false,
            data: {
              paperList: [{
                id: 1,
                paperName: '试卷标题',
                paperType: '中考真题',
                grade: '初一上',
                updateUser: 'admin',
                createUser: 'root',
                createTime: '2013-05-03 10:30:12',
                updateTime: '2017-05-03 12:30:16',
                status: 'AVAILABLE',
                subject: '数学',
                totalScore: 90,
                itemCount: 20
              }]
            }
          }
          resolve(response)
        })
        .catch(error => {
          reject(error.response)
        })
    })
  },
  // 获取整份试卷详情
  PaperDetail () {
    return new Promise((resolve, reject) => {
      axios.post('/tr/api/paper/showPaperInfo?paperId=1&displayType=1')
        .then(response => {
          console.log('/tr/api/paper/showPaperInfo?paperId=1&displayType=1')
          resolve(response.data)
        })
        .catch(error => {
          reject(error.response)
        })
    })
  }
}
