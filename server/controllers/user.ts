import { User } from '../models'
// eslint-disable-next-line no-unused-vars
import type Router from 'koa-router'

export const getUserList: Router.IMiddleware = async ctx => {
    const data = await User.find()
    const result = {
        status: 200,
        response: data,
    }
    ctx.body = result
}
export const getUserById: Router.IMiddleware = async ctx => {
    const data = await User.findOne({ _id: ctx.params.id })
    const result = {
        status: 200,
        response: data,
    }
    ctx.body = result
}
export const deleteUser: Router.IMiddleware = async ctx => {
    const data = await User.remove({ _id: ctx.params.id })
    const result = {
        status: 200,
        response: data,
    }
    ctx.body = result
}
export const addUser: Router.IMiddleware = async ctx => {
    const { username, password, email } = ctx.request.body
    const newUser = new User({
        username,
        password,
        email,
    })
    const data = await newUser.save()
    const result = {
        status: 200,
        response: data,
    }
    ctx.body = result
}
export const updateUser: Router.IMiddleware = async ctx => {
    const { id, username, password, email } = ctx.request.body
    const data = await User.updateOne(
        {
            _id: id,
        },
        {
            $set: {
                username,
                password,
                email,
            }
        })
    const result = {
        status: 200,
        response: data,
    }
    ctx.body = result
}

