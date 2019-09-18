import { Response } from 'express'

let dateFns = require('date-fns/format')

class ApiResponse {
  statusCode: number
  msg?: String
  data?: any

  constructor(statusCode: number, msg?: String, data?: any) {
    this.statusCode = statusCode
    this.msg = msg ? msg : ''
    this.data = data
  }
}

export default {
  SUCCESS: 1,
  ERROR: 0,
  ApiResponse,
  now: function() {
    return dateFns(new Date(), 'yyyy/MM/dd HH:mm:ss.SS')
  },
  out: function(response: Response, apiResponse: ApiResponse) {
    let s = JSON.stringify(apiResponse)

    console.info('Response: ' + s)
    response.setHeader('Content-Type', 'application/json')
    response.send(s)
  }
}
