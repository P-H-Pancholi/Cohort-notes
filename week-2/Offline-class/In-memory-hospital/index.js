const express = require("express")
const app = express()

const users = [{
    name: "John",
    kidneys: [{
        healthy: false
    }]
}]

app.use(express.json())


app.get("/", (req, res) => {
    const JohnKidneys = users[0].kidneys;
    const totalNumOfKidneys = JohnKidneys.length;
    const healthyKidneys = JohnKidneys.filter((n) => n.healthy == true)
    const numOfHealthyKidneys = healthyKidneys.length;
    const numOfUnhealthyKidneys = totalNumOfKidneys - numOfHealthyKidneys;
    res.json({
        totalNumOfKidneys,
        numOfHealthyKidneys,
        numOfUnhealthyKidneys
    })
})

app.post("/", (req, res) => {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

app.put("/", (req, res) => {
    for(let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }

    res.json({
        msg: "Done!"
    })
})

app.delete("/", (req, res) => {
    const JohnKidneys = users[0].kidneys
    const healthyKidneys = JohnKidneys.filter((n) => n.healthy==true);
    const numOfUnhealthyKidneys = JohnKidneys.length - healthyKidneys.length;
    if (numOfUnhealthyKidneys == 0){
        res.status(411).json({
            msg: "You have no unhealthy kidneys"
        })
    }
    else{
        users[0].kidneys = healthyKidneys;
        res.json({})
    }
    
})

app.listen(3000)


