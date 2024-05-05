const express = require("express")

const app = express()

app.get('/health-check', (req, res) => {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    if(username != 'John' || password != 'Doe') {
        res.status(403).json({
            "msg" : "User doesn't exists"
        });
        return
    }

    if(kidneyId != 1 && kidneyId != 2) {
        res.status(411).json({
            "msg" : "Wrong input"
        });
        return;
    }

    res.json({
        "msg" : "Your heart is healthy"
    });
});

app.listen(3000)