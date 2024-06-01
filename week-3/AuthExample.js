const express = require("express")
const jwt = require("jsonwebtoken");
const jwtpass = "123456789";

const app = express();

const ALL_USERS = [
    {
        "name" : "John Doe",
        "username" : "doejohn@dummy.com",
        "password" : "dummyuser1"
    },
    {
        "name" : "James Cameron",
        "username" : "cameronjames@dummy.com",
        "password" : "dummyuser2"
    },
    {
        "name" : "Sakura Haruno",
        "username" : "harunosakura@leafvillage.com",
        "password" : "medicalninja"
    }
];

app.use(express.json());

function userExists(username, password) {
    const user = ALL_USERS.find((n) => {
        return n.username == username && n.password == password;
    })
    if( typeof user == 'undefined' ) {
        return false;
    }else{
        return true
    }
}



app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    
    if ( !userExists(username, password) ) {
        res.status(411).json({
            "msg" : "User does not exists"
        })
        return
    }
    const token = jwt.sign({username: username}, jwtpass);

    return res.json({
        token,
    })
})

app.get("/users", (req, res) => {
    const token = req.headers.authorization;
    try{
        const decoded = jwt.verify(token, jwtpass);
        const username = decoded.username
        const remainingUsers = ALL_USERS.filter((n) => n.username != username)

        res.json({
            "users" : remainingUsers
        })

    }catch (err){
        return res.status(403).json({
            "msg" : "Invalid token"
        })
    }
})

app.listen(3000)