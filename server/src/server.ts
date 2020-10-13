import express from 'express';

import './database/connection'

const app = express()

app.use(express.json())

app.post('/users', (request,response) => {
  return response.json({ message: 'Olá, mundo.' })
})

app.listen(3333)