const { User } = require('./model')

module.exports = {
    getUserList: async (ctx, next) => {
        const data = await User.find()
        const result = {
            status: 200,
            response: data,
        }
        ctx.body = result
    },
    getUserById: async (ctx, next) => {
        const data = await User.findOne({ _id: ctx.params.id })
        const result = {
            status: 200,
            response: data,
        }
        ctx.body = result
    },
    deleteUser: async (ctx, next) => {
        const data = await User.remove({ _id: ctx.params.id })
        const result = {
            status: 200,
            response: data,
        }
        ctx.body = result
    },
    addUser: async (ctx, next) => {
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
    },
    updateUser: async (ctx, next) => {
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

    },
}
