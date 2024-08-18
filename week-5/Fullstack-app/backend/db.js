const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://admin:7411@cluster0.fcahmj1.mongodb.net/todo-app')

const todoAppSchema = new mongoose.Schema({
    name: String,
    description: String,
    Completed: Boolean
})


const todos = mongoose.model('Todo', todoAppSchema)

module.exports = {
    todos: todos
}
