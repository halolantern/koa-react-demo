
module.exports = {
    setCookie: async ctx => {
        ctx.cookies.set('id', 'testcookies')
        ctx.body = 'has set cookie'
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
