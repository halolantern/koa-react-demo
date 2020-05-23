import Router from 'koa-router'
import ajax from './ajax'
import user from './user'

const router = new Router()
router.use('/api', ajax.routes())
router.use('/api', user.routes())

export default router
