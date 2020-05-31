import Router from 'koa-router'
import ajax from './ajax'
import user from './user'

const router = new Router()
router.use('/api', ajax.routes())
router.use('/api', user.routes())
router.get('/session', ctx => {
    // @ts-ignore
    const { session } = ctx
    session.count = session.count || 0
    session.count++
    ctx.body = session
})

export default router
