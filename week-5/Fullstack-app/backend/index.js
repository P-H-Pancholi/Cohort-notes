const { getTodoSchema, todoSchema } = require('./types')
const { todos } = require('./db')
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors()) //removes cors error, let frontend allow to hit backend
app.use(express.json())

app.get('/todos', async (req, res) => {
    const allTodos = await todos.find({})
    res.json({
        'todos' : allTodos
    })
})

app.post('/todo', async (req,res) => {
    const createPayload = req.body;
    const parsedPayload = todoSchema.safeParse(createPayload);

    if(!parsedPayload.success) {
        res.status(411).json({
            'msg': 'You send wrong input'
        })
        return
    }

    await todos.create({
        name: req.body.name,
        description: req.body.description,
        Completed: false
    })

    res.json({
        'msg' : 'Todo Created Successfully'
    })
    return
})

app.put('/completed', async (req, res) => {
    const idPayload = req.body;
    const parsedPayload = getTodoSchema.safeParse(idPayload)
    if(!parsedPayload.success) {
        res.status(411).json({
            'msg': 'You send wrong input'
        })
    }

    await todos.updateOne({
        _id: req.body.id
    }, {
        Completed: true
    })

    res.json({
        'msg' : 'Todo Updated Successfully'
    })
    return
})

app.listen(3000)