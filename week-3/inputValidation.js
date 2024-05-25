const express = require('express')
const z = require('zod')
const app = express()

const schema = z.array(z.number());

app.use(express.json())

app.post('/health-check', (req, res) => {
    let kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    if ( response.success != false) {
        res.status(411).json({
            "msg" : response
        })
    }else{
        res.send(response)
    }
});

// global catches

app.use((err, req, res, next) => {
    // console.error(err); // Log the error for debuging
    res.status(500).send("An internal server occurred")
})

app.listen(3000)