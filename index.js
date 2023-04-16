import 'dotenv/config'
import './database/connectdb.js'
import express from 'express'
import authRouter from './routes/auth.route.js'
import noteRouter from './routes/note.route.js'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
  res.json({msg: 'API funcionando'})
})

app.use('/api/auth',authRouter)
app.use('/api/notes',noteRouter)


const PORT = process.env.PORT || 5000
app.listen(5000, () => {
  console.log(`Server funcionando en http://localhost:${PORT}`)
})