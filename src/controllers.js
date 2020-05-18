module.exports = {
    home: async ctx => {
        ctx.cookies.set('id', 'testcookies')
        ctx.body = 'has set cookie'
    },
    signin: async ({ request, response }, next) => {
        const { name = 'z', password = '1' } = request.body
        console.log('[ name ]', name, password, request.body);
        if ('zx' === name && '123' === password) {
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
