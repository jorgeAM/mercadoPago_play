const express = require('express');
const Customer = require('../models/mercadoPago/customer')
const { createCustomer } = require('../services/mercadoPago')

const api = express.Router();

api.post('/customers', async (req, res) => {
    try {
        const customerMP = await createCustomer(req.body)
        let customer = new Customer()
        customer.mercadoPagoId = customerMP.body.id
        customer.idPosUuid = req.body.pos
        customer.name = customerMP.body.first_name
        customer.lastName = customerMP.body.last_name
        customer.email = customerMP.body.email
        customer.phone = customerMP.body.phone.number
        customer.identificationType = customerMP.body.identification.type
        customer.identificationValue = customerMP.body.identification.number
        customer = await customer.save()
        return res.json({
            data: customer
        })
    } catch (err) {
        return res.json({
            message: 'Hubo un error al crear cliente de mercado pago',
            err
        })
    }
    
})

module.exports = api