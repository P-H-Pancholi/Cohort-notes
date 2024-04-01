const express = require("express");
// npm install express

const bodyParser = require("body-parser")
// npm install body-parser

const app = express()
const port = 3000

app.use(bodyParser.json())

app.post('/sample', (req,  res) => {
  console.log(req.body)
  res.send('Hello World!')
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})