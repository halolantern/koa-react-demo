const Router = require('koa-router')
const userController = require('./userController')

const router = new Router()
router.get('/users', userController.getUserList)
router.get('/user/:id', userController.getUserById)
router.get('/user/delete/:id', userController.deleteUser)
router.post('/user/add', userController.addUser)
router.post('/user/update', userController.updateUser)

module.exports = router
