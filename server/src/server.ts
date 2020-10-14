import express from 'express'
import path from 'path'
import cors from 'cors'
import 'express-async-errors'
import './database/connection'
import routes from './routes'
import errorHandler from './errors/handler'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler)


const PORT = 3333 || process.env.PORT
app.listen(PORT, () => {
    // tslint:disable-next-line: no-console
    console.log(`Server is running on Port: ${PORT}`)
})