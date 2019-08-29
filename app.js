const Koa = require('koa')
const app = new Koa()

const Router = require('koa-router')
const router = new Router()

const add = require('./lib/add')

router.get('/', ctx => {
    ctx.body = 'hello home'
})

router.get('/owner', ctx => {
    ctx.body = 'zx'
})

app.use(router.routes())

const port = add(3721, 0)
app.listen(port)

console.log(`[ server is runing at port ${port} ]`)
