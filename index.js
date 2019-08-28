const Koa = require('koa')
const app = new Koa()
const add = require('./lib/add')

app.use(async (ctx) => {
    ctx.body = 'hello there'
})

const port = add(3721, 0)
app.listen(port)

console.log(`[ server is runing at port ${port} ]`)
