const Router = require('koa-router')
const ajaxController = require('./ajaxController')

const router = new Router()
router.get('/ajax', ajaxController.ajax)
router.get('/jsonp', ajaxController.jsonp)
router.post('/formdata', ajaxController.formData)

module.exports = router
