const Koa = require('koa')
const app = new Koa()

app.use(async (ctx) => {
    ctx.body = 'hello there'
})

const port = 8089
app.listen(port)