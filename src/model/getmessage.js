import Http from './http'

const baseUrl = 'api'
export default class GetMessage extends Http {
  getLatest () {
    const url = baseUrl + '/classic/latest'
    const params = {}
    console.log(url)
    return this.getmessage(url, params)
  }
  getNext (index) {
    console.log(index)
    const url = `${baseUrl}/classic/${index}/previous`
    console.log(url)
    return this.getmessage(url)
  }
  getLast (index) {
    const url = `${baseUrl}/classic/${index}/next`
    return this.getmessage(url)
  }
  getBookHot () {
    const url = baseUrl + '/book/hot_list'
    return this.getmessage(url)
  }
}
