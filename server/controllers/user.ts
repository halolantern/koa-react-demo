/* eslint-disable require-atomic-updates */
import { User } from '../models'
// eslint-disable-next-line no-unused-vars
import type Router from 'koa-router'

export const getUserList: Router.IMiddleware = async ctx => {
    const doc = await User.find()
    ctx.body = {
        code: 0,
        response: doc,
    }
}
export const getUserByName: Router.IMiddleware = async ctx => {
    const { username } = ctx.params
    const doc = await User.findOne({ username })
    ctx.body = {
        code: 0,
        response: doc,
    }
}
export const deleteUser: Router.IMiddleware = async ctx => {
    const { username } = ctx.params
    const doc = await User.remove({ username })
    ctx.body = {
        code: 0,
        response: doc,
    }
}
export const addUser: Router.IMiddleware = async ctx => {
    const { username, password, email } = ctx.request.body
    const user = await User.find({ username })
    if (user.length) {
        ctx.body = {
            code: -1,
            msg: `user ${username} is exist!`
        }
        return
    }
    const newUser = new User({
        username,
        password,
        email,
    })
    const doc = await newUser.save()
    ctx.body = {
        code: 0,
        response: doc,
    }
}
export const updateUser: Router.IMiddleware = async ctx => {
    const { username, password, email } = ctx.request.body
    const doc = await User.updateOne(
        {
            username,
        },
        {
            $set: {
                username,
                password,
                email,
            },
        }
    )
    ctx.body = {
        code: 0,
        response: doc,
    }
}
export const signin: Router.IMiddleware = async ctx => {
    const { username, password } = ctx.request.body
    const doc = await User.findOne({ username, password })
    if (!doc) {
        ctx.body = {
            code: -1,
            msg: 'username or password is wrong!'
        }
        return
    }
    ctx.body = {
        code: 0,
        response: doc,
    }
}
