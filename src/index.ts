import express, { Request, Response } from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
import { createTodo, deleteTodoById, getTodoById, getTodos, updateTodoById } from './db/todo'

const app = express()
const router = express.Router()

dotenv.config()
app.use(cors({ credentials: true }))
app.use(express.json())

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Server running at PORT: ${PORT}`)
})


router.get('/todos', async (req: Request, res: Response) => {
    try {
        const todos = await getTodos()
        res.status(200).json(todos)
    } catch (error) {
        console.error(error)
        res.sendStatus(400)
    }
})

router.post('/todos', async (req: Request, res: Response) => {
    try {
        const { title } = req.body
        const todo = await createTodo({ title })
        res.status(200).json(todo)
    } catch (error) {
        console.error(error)
        res.sendStatus(400)
    }
})

router.route('/todos/:id')
    .get(async (req: Request, res: Response) => {
        try {
            const todo = await getTodoById(req.params.id)
            return res.status(200).json(todo)
        } catch (error) {
            console.error(error)
            res.sendStatus(400)
        }
    })
    .put(async (req: Request, res: Response) => {
        try {
            const { title, done } = req.body
            const todo = await updateTodoById(req.params.id, { title, done })
            res.status(200).json(todo)
        } catch (error) {
            console.error(error)
            res.sendStatus(400)
        }

    })
    .delete(async (req: Request, res: Response) => {
        try {
            await deleteTodoById(req.params.id)
            res.sendStatus(204)
        } catch (error) {
            console.error(error)
            res.sendStatus(400)
        }
    })

app.use(router)
const MONGO_URL = process.env.MONGO_URL
mongoose.connect(MONGO_URL)
mongoose.connection.on('error', (error: Error) => console.error(error))

