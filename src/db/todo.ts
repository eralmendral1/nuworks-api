import mongoose from 'mongoose'

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        required: true,
        default: false
    },
    created_at: {
        type: Date,
    },
    updated_at: {
        type: Date
    }
})

TodoSchema.pre('save', function (next) {
    let now = new Date()
    this.updated_at = now
    if (!this.created_at) {
        this.created_at = now
    }
    next()
})

export const TodoModel = mongoose.model('Todo', TodoSchema)
export const getTodos = () => TodoModel.find()
export const getTodoById = (id: string) => TodoModel.findById(id)
export const createTodo = (values: Record<string, any>) => new TodoModel(values).save().then(todo => todo.toObject())
export const updateTodoById = (id: string, values: Record<string, any>) => TodoModel.findByIdAndUpdate(id, values)
export const deleteTodoById = (id: string) => TodoModel.findOneAndDelete({ _id: id })