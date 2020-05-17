const Router = require('koa-router')
const controllers = require('./controllers')
const router = new Router()

router.get('/', controllers.home)
router.post('/setting/game.do', controllers.settingGame)
router.post('/signin', controllers.signin)
router.get('/ajax', controllers.ajax)
router.get('/jsonp', controllers.jsonp)
router.post('/formdata', controllers.formData)

module.exports = router
