const express = require("express")

const app = express()


function userAuth (req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;

    if(username != 'John' || password != 'Doe') {
        res.status(403).json({
            "msg" : "User doesn't exists"
        });
        return
    }else{
        next()
    }
}

function kidneyAuth (req, res, next) {
    const kidneyId = req.query.kidneyId;
    if(kidneyId != 1 && kidneyId != 2) {
        res.status(411).json({
            "msg" : "Wrong input"
        });
        return;
    }else{
        next();
    }
}

app.get('/health-check', userAuth, kidneyAuth, (req, res) => {

    res.json({
        "msg" : "Your heart is healthy"
    });
});

app.get('/kidney-check', userAuth, kidneyAuth, (req, res) => {

    res.json({
        "msg" : "Your heart is healthy"
    });
});

app.get('/heart-check', userAuth,  (req, res) => {

    res.json({
        "msg" : "Your heart is healthy"
    });
});


app.listen(3000)