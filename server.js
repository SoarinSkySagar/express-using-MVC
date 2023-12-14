const express  = require('express')
const path = require('path')

const middlewaresController = require('./controllers/middlewares.controller')
const hbsController = require('./controllers/hbs.controller')
const friendsRouter = require('./routes/friends.router')
const messagesRouter = require('./routes/message.router')

const app = express()
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
const PORT = 9000

app.use(middlewaresController.responseTime)
app.use('/site', express.static(path.join(__dirname, 'public')))
app.use(express.json())

app.get('/', hbsController.getHbsSite)
app.use('/friends', friendsRouter)
app.use('/messages', messagesRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})