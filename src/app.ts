import express from 'express'
import userRoute from './routes/userRoutes.routes'

const port : number = 3000
const app = express()

app.use(express.json())
app.use('/users', userRoute)

app.listen(port)