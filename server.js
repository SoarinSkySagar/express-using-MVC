const express  = require('express')
const path = require('path')

const middlewaresController = require('./controllers/middlewares.controller')
const friendsRouter = require('./routes/friends.router')
const messagesRouter = require('./routes/message.router')

const app = express()
const PORT = 9000

app.use(middlewaresController.responseTime)
app.use('/site', express.static(path.join(__dirname, 'public')))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello ExpressJS!')
})

app.use('/friends', friendsRouter)
app.use('/messages', messagesRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})