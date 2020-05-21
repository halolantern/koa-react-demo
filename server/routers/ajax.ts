import Router from 'koa-router'
import {
    ajax,
    jsonp,
    formData,
} from '../controllers/ajax'

const router = new Router()
router.get('/ajax', ajax)
router.get('/jsonp', jsonp)
router.post('/formdata', formData)

export default router
