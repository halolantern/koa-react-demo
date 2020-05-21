import Router from 'koa-router'
import {
    getUserList,
    getUserById,
    deleteUser,
    addUser,
    updateUser,
} from '../controllers/user'

const router = new Router()
router.get('/users', getUserList)
router.get('/userj/:id', getUserById)
router.get('/user/delete/:id', deleteUser)
router.post('/user/add', addUser)
router.post('/user/update', updateUser)

export default router
