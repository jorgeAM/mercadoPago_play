const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    mercadoPagoId: {
        type: String,
        unique: true
    },
    idPosUuid: {
        type: String,
        unique: true
    },
	name: String,
	lastName: String,
    email: {
        type: String,
        unique: true
    },
    phone: String,
    identificationType: String,
    identificationValue: String,
});

module.exports = mongoose.model('Customer', customerSchema)