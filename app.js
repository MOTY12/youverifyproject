const express = require('express')
const dotenv = require('dotenv')
const app = express()


const uniqueRoutes = require('./router/uniqcharacter')
const permutationRoutes = require('./router/checkpermutation')

dotenv.config()

const apis = process.env.API_URL


app.use(express.json())

app.use(`${apis}`, uniqueRoutes)
app.use(`${apis}`, permutationRoutes)

app.get('/', (req, res) => {
    res.send("hello world")
})



app.listen(process.env.PORT || 5000)