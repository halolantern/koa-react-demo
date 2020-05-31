import mongoose from 'mongoose'
import { mongodb } from './config'

export function initDb() {
    const dbName = 'zx'
    const { host, port } = mongodb
    const url = `${host}:${port}/${dbName}`
    const options = { useNewUrlParser: true, useUnifiedTopology: true }
    mongoose.connect(url, options)
    const db = mongoose.connection
    db.on('error', console.error.bind(console, '[ db connect error ]'))
    db.once('open', console.log.bind(console, '[ db is ready ]'))
}
