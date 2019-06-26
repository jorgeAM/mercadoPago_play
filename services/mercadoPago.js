const mercadopago = require('mercadopago')

mercadopago.configurations.setAccessToken('xxx')

const createPayment =  async data => {
    return mercadopago.payment.save(data)
}

const createCustomer =  async data => {
    return mercadopago.customers.save(data)
}

const createCard =  async data => {
    return mercadopago.customers.cards.create(data)
}

module.exports = {
    createPayment,
    createCustomer,
    createCard,
}