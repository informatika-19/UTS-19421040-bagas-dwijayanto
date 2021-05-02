const monggoose = require('mongoose')
const Schema = monggoose.Schema

const PenjualanBuah = new Schema ({
    JenisBuah: {
        type: String
    },
    NamaBuah: {
        type: String
    },
    HargaBuah: {
        type: String
    }
})
module.exports = monggoose.model('Buah', PenjualanBuah)