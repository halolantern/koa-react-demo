import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import http from 'http'
import path from 'path'
import koaStatic from 'koa-static'
import router from './routers'
import createWS from './ws'
import { initDb } from './db'
import { port, redis } from './config'
// @ts-ignore
import cors from '@koa/cors'
import settion from 'koa-generic-session'
// @ts-ignore
import redisStore from 'koa-redis'

const app = new Koa()
app.keys = ['key', 'keykeys']
app.use(settion({
    store: new redisStore({
        host: redis.host,
        port: redis.port,
    })
}))
const reactStatic = koaStatic(path.resolve(__dirname, '../static/build'))
const testStatic = koaStatic(path.resolve(__dirname, './public'))

initDb()
app.use(cors({
    'origin': '*',
}))
app.use(reactStatic)
app.use(testStatic)
app.use(bodyParser())
app.use(router.routes())

const server = http.createServer(app.callback())
createWS(server)
server.listen(port)
console.log(`[ Server is running at ${port} ]`)
