import express from 'express'
import userRouter from './routes/user.mjs'
import bodyParser from 'body-parser'

// Set up database connection
import './controllers/dbconnect.mjs'

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/user',userRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}`))