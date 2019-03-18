import axios from 'axios'
// const _URL_ = 'api/classic/latest'
const appkey = '?appkey=u0131mHGrnzaLO3Y'

export default class Http {
  getmessage (url) {
    // console.log(url + appkey)
    return axios.get(url + appkey)
    // axios.get({
    //   url: url,
    //   params: {
    //     // 'content-type': 'application/json',
    //     appkey: 'u0131mHGrnzaLO3Y'
    //   }
    // }).then(res => {
    //   console.log('success')
    // }).catch(res => {
    //   console.log('fail')
    // })
    // console.log(result)
    // let result = axios.create({
    //   baseURL: 'api/classic/latest',
    //   headers: { 'content-type': 'application/json',
    //     'appkey': 'u0131mHGrnzaLO3Y' }
    // })
    // console.log(result)
  }

  postmessage (url = '', data = {}) {
    return axios.create({
      url: url,
      method: 'post',
      data: 'data'
    })
  }
}
