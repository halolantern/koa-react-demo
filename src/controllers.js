const { encodeResData, decodeReqData } = require('./util')

module.exports = {
    settingGame: async (ctx, next) => {
        const rawBody = ctx.request.rawBody
        const deData = decodeReqData(rawBody)
        // console.log('[ deData ]', deData);
        const result = {
            name: 'zhan',
            age: '18',
        }
        const resBody = encodeResData(result)
        ctx.body = resBody
        ctx.set('Content-Type', 'application/octet-stream')
        ctx.type = 'application/octet-stream'
        // ctx.res.statusCode = 200
        // ctx.res.setHeader('Content-Type', 'application/octet-stream')
        // ctx.res.write(resBody)
        // ctx.res.end()
        await next()
    },
    home: async ctx => {
        ctx.cookies.set('id', 'testcookies')
        ctx.body = 'has set cookie'
    },
    signin: async ({ request, response }, next) => {
        const { name = 'z', password = '1' } = request.body
        console.log('[ name ]', name, password, request.body);
        if ('zhan' === name && '123' === password) {
            response.body = `Hello ${name}`
        } else {
            response.body = ` Try again`
        }
        await next()
    },
    ajax: async (ctx, next) => {
        ctx.body = 'received'
    },
    jsonp: async (ctx, next) => {
        const query = ctx.request.query
        const responseData = 'jsonp response'
        ctx.body = `${query.callback}(${JSON.stringify(responseData)})`
    },
    formData: async (ctx, next) => {
        console.log('[ ctx ]', ctx.request.body, typeof ctx.request.body);
        ctx.body = 'data'
        await next()
    },
}