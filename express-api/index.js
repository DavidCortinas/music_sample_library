const express = require('express')
const path = require('path');
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const stripe = require('stripe')('sk_test_51Ip1TgGleQX4qpqGWJDFUrHdvMiQ0rHZ1EKH0jGLfktv8ZBmxfkanEnrUgGEOGZvJohEAWYmIL8b3Jr65L2m3MCL00aeXiM6SV')
const port = 3000

app.use(express.static(path.join(__dirname, 'build')));

app.get("*", (req, res) => {
    res.send("Hello from the API");
});

-app.get('/', function (req, res) {
    +app.get('/*', function (req, res) {
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
    })});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cors())

app.post('/pay', async (req, res) => {
    const { email } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
        amount: 1500,
        currency: 'usd',
        // Verify your integration in this guide by including this parameter
        metadata: { integration_check: 'accept_a_payment' },
        receipt_email: email,
    });

    res.json({ 'client_secret': paymentIntent['client_secret'] })
})

app.post('/sub', async (req, res) => {
    const {email, payment_method} = req.body;

    const customer = await stripe.customers.create({
        email: email,
        payment_method: payment_method,
        invoice_settings: {
            default_payment_method: payment_method,
        },
    });

    const subscription = await stripe.subscriptions.create({
        customer: customer.id,
        items: [{ price: 'price_1IyTqwGleQX4qpqGiwhsCSxa' }],
        expand: ['latest_invoice.payment_intent']
    });

    const status = subscription['latest_invoice']['payment_intent']['status']
    const client_secret = subscription['latest_invoice']['payment_intent']['client_secret']

    res.json({'client_secret': client_secret, 'status': status})
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))