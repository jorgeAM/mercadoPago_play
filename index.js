const bodyParser = require('body-parser');
const express = require('express')
const mongoose = require('mongoose')
const customerRoutes = require('./routes/customer')
const cardRoutes = require('./routes/card')
const paymentRoutes = require('./routes/payment')

const app = express()
const port = process.env.PORT || 3000
const db = mongoose.connection
const mongoURL = process.env.MONGO_URL || 'mongodb://localhost/idPay'

mongoose.connect(mongoURL, {useNewUrlParser: true});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', customerRoutes)
app.use('/api', cardRoutes)
app.use('/api', paymentRoutes)

app.listen(port, () => {
    db.on('error', console.error.bind(console, 'something got wrong! 💀'));
    db.once('open', function() {
        console.log('successful connection 🚀')
        console.log(`server is  listening on port ${port}! 🚀 `)
    })
})