const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const http = require('http')
const path = require('path')
const static = require('koa-static')
const router = require('./routers')
const createWS = require('./ws')
const app = new Koa()
const staticServer = static(path.resolve(__dirname, '../static'), {})

app.use(staticServer)
app.use(async (ctx, next) => {
    console.log(`${ctx.request.method} ${ctx.request.url}`);
    await next()
});
app.use(bodyParser({
    enableTypes: ['text'],
    extendTypes: {
        text: [
            'application/json',
            // 'multipart/form-data',
            'application/octet-stream',
        ]
    },
}))
app.use(router.routes())

const server = http.createServer(app.callback())
createWS(server)
const port = `3721`
server.listen(port)
console.log(`[ Server is running at ${port} ]`);
