const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.get('/interest', function (req, res){
    const principal = parseFloat(req.query.principal)
    const rate = parseFloat(req.query.rate)
    const time = parseFloat(req.query.time)

    const interest = (principal*rate*time)/100
    const total = principal + interest

    res.json({
        interest,
        total
    })
})

app.listen(3000)