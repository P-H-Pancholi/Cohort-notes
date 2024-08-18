const zod = require('zod')

const todoSchema = zod.object({
    name: zod.string().min(1),
    description: zod.string().min(1)
})

const getTodoSchema = zod.object({
    id: zod.string().min(1)
})

module.exports = {
    todoSchema: todoSchema,
    getTodoSchema: getTodoSchema
}