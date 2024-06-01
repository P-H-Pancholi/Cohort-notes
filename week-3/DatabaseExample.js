const express = require("express")
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose")
const jwtpass = "123456789";

mongoose.connect("mongodb+srv://admin:Phalin%401311@cluster0.fcahmj1.mongodb.net/usernewapp");

const User = mongoose.model('Users',{ name: String, username: String, password: String})
const app = express();


app.use(express.json());


app.post("/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existingUser = await User.findOne({ username: username });
    if (existingUser) {
        return res.status(400).send("Username already exists")
    }

    const user = new User({
        username: username,
        password: password,
        name: name
    })
    user.save();
    res.json({
        "msg" : "User created successfully"
    })
})

app.post("/signin", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    
    const existingUser = await User.findOne({ username: username, password: password });
    if (!existingUser ) {
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

app.get("/users", async (req, res) => {
    const token = req.headers.authorization;
    try{
        const decoded = jwt.verify(token, jwtpass);
        const username = decoded.username
        const remainingUsers = await User.find({ username: { $ne: username }})

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