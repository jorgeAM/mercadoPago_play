const mercadopago = require('mercadopago')

mercadopago.configurations.setAccessToken('TEST-6017328048569435-061815-44910917ac4a52391d3e41f25bc6f394-445147303')

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