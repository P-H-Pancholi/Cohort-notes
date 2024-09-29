const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())

app.get('/notifications', (req, res) => {
    const notificationObj = {
        network : Math.round(Math.random() * 10),
        jobs : Math.round(Math.random() * 10),
        messaging : Math.round(Math.random() * 10),
        notifications : Math.round(Math.random() * 10)
    }

    res.json(notificationObj)
})

app.listen(3000)