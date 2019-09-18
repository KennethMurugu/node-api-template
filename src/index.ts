import express, { NextFunction, Request, Response, response } from 'express'

let app = express()
let bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(express.json()) // to support JSON-encoded bodies
app.use(
  express.urlencoded({
    // to support URL-encoded bodies
    extended: true
  })
)

import utils from './utils'
import clc from 'cli-color'
import { request } from 'http'

//Set the colors for different log messages
let infoColor = clc.blueBright
let errColor = clc.white.bgRed.bold
let warnColor = clc.yellow

let myConsole: Console = Object.assign({}, console)

console.log = function(message: any) {
  myConsole.log(`[${utils.now()}]/L/ ${message}`)
}

console.info = function(message: any) {
  myConsole.info(infoColor(`[${utils.now()}]/I/ ${message}`))
}

console.warn = function(message: any) {
  myConsole.info(warnColor(`[${utils.now()}]/W/ ${message}`))
}

console.error = function(message: any) {
  myConsole.info(errColor(`[${utils.now()}]/E/ ${message}`))
}

// Some middleware to log all incoming requests
function logAllRequests(
  request: Request,
  response: Response,
  next: NextFunction
): void {
  console.info(
    `Request at ${request.path}, request.body=${JSON.stringify(request.body)}`
  )
  next()
}

//Set up routes here

app.get('/test', (request: Request, response: Response) => {
  utils.out(response, {
    statusCode: utils.SUCCESS,
    data: 'Server is up and running!!'
  })
})

/*
e.g

import UserRouter from './user/user.router'

app
  .use(logAllRequests) 

  .use('/user', UserRouter)

*/

// Set the IP address to listen to
const serverIP =
  process.env.NODE_ENV === 'development' ? '192.168.2.190' : '178.79.133.184' //dev - 192.168.43.63
console.log(`chosen IP=${serverIP}`)

// Run the server
var server = app.listen(8081, serverIP, () => {
  console.info(`Backend Server listening on ${serverIP}:8081`)
})
