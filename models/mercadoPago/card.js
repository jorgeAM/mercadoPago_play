const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const cardSchema = new Schema({
    mercadoPagoId: {
        type: String,
        unique: true
    },
});

module.exports = mongoose.model('Payment', cardSchema)