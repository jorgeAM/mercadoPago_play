const express = require('express');
const { createCard } = require('../services/mercadoPago')

const api = express.Router();

api.post('/cards', async (req, res) => {
    try {
        const card = await createCard(req.body)
        console.log(card)        
    } catch (err) {
        return res.json({
            message: 'Hubo un error al crear tarjeta de mercado pago',
            err
        })
    }
    
})

module.exports = api