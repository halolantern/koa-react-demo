const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const http = require('http')
const path = require('path')
const koaStatic = require('koa-static')
const router = require('./router')
const createWS = require('./ws')
const { initDb } = require('./db')
const app = new Koa()
const staticServer = koaStatic(path.resolve(__dirname, '../static'), {})

initDb()
app.use(staticServer)
app.use(bodyParser())
app.use(router.routes())

const server = http.createServer(app.callback())
createWS(server)
const port = `3721`
server.listen(port)
console.log(`[ Server is running at ${port} ]`);
