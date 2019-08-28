const Koa = require('koa')
const app = new Koa()
const add = require('./lib/add')

app.use(async (ctx) => {
    ctx.body = 'hello there'
})

const port = add(8080, 10000)
app.listen(port)

console.log(`[ server is runing at port ${port} ]`)
