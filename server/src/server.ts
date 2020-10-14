import express from 'express'
import './database/connection'
import routes from './routes'

const app = express()

app.use(express.json())
app.use(routes)


const PORT = 3333 || process.env.PORT
app.listen(PORT, () => {
    // tslint:disable-next-line: no-console
    console.log(`Server is running on Port: ${PORT}`)
})