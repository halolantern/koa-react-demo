// eslint-disable-next-line no-unused-vars
import type Router from 'koa-router'

export const setCookie: Router.IMiddleware = async ctx => {
    ctx.cookies.set('id', 'testcookies')
    ctx.body = 'has set cookie'
}
export const ajax: Router.IMiddleware = async ctx => {
    ctx.body = 'received'
}
export const jsonp: Router.IMiddleware = async ctx => {
    const query = ctx.request.query
    const responseData = 'jsonp response'
    ctx.body = `${query.callback}(${JSON.stringify(responseData)})`
}
export const formData: Router.IMiddleware = async (ctx, next) => {
    console.log('[ ctx ]', ctx.request.body, typeof ctx.request.body)
    ctx.body = 'data'
    await next()
}
