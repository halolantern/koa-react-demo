const Router = require('koa-router')
const ajax = require('./ajaxRouter')
const user = require('./userRouter')

const router = new Router()
router.use(ajax.routes())
router.use(user.routes())

module.exports = router



