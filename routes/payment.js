const express = require('express');
const { createPayment } = require('../services/mercadoPago')

const api = express.Router();

api.post('/payments', async (req, res) => {
    try {
        const payment = await createPayment(req.body)
        console.log(payment)        
    } catch (err) {
        return res.json({
            message: 'Hubo un error al procesar el pago',
            err
        })
    }
    
})

module.exports = api