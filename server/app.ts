import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import http from 'http'
import path from 'path'
import koaStatic from 'koa-static'
import router from './routers'
import createWS from './ws'
import { initDb } from './db'
import config from './config'

const app = new Koa()
const staticServer = koaStatic(path.resolve(__dirname, '../static'), {})

initDb()
app.use(staticServer)
app.use(bodyParser())
app.use(router.routes())

const server = http.createServer(app.callback())
createWS(server)
const { port } = config
server.listen(port)
console.log(`[ Server is running at ${port} ]`)
