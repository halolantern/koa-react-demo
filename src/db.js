
const mongoose = require('mongoose')

function initDb() {
    const options = { useNewUrlParser: true, useUnifiedTopology: true }
    mongoose.connect('mongodb://localhost:27017/zx', options)
    const db = mongoose.connection
    db.on('error', console.error.bind(console, '[ db connect error ]'))
    db.once('open', console.log.bind(console, '[ db is ready ]'))
}

module.exports = {
    initDb,
}
