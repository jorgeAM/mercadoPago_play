const express = require('express');
const { createCustomer } = require('../services/mercadoPago')

const api = express.Router();

api.post('/customers', async (req, res) => {
    try {
        const customer = await createCustomer(req.body)
        console.log(customer)        
    } catch (err) {
        return res.json({
            message: 'Hubo un error al crear cliente de mercado pago',
            err
        })
    }
    
})

module.exports = api