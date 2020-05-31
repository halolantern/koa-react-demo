import Router from 'koa-router'
import {
    getUserList,
    getUserByName,
    deleteUser,
    addUser,
    updateUser,
    signin,
} from '../controllers/user'

const router = new Router()
router.get('/users', getUserList)
router.get('/userj/:username', getUserByName)
router.get('/user/delete/:username', deleteUser)
router.post('/user/add', addUser)
router.post('/user/update', updateUser)
router.post('/user/signin', signin)
router.post('/user/signup', addUser)

export default router
