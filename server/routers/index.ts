import Router from 'koa-router'
import ajax from './ajax'
import user from './user'

const router = new Router()
router.use(ajax.routes())
router.use(user.routes())

export default router



