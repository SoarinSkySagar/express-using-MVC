const express = require('express')
const friendsController = require('../controllers/friends.controller')


const friendsRouter = express.Router()

friendsRouter.use(friendsController.logIP)

friendsRouter.get('/', friendsController.listFriends)
friendsRouter.get('/:friendId', friendsController.searchFriend)
friendsRouter.post('/', friendsController.postFriend)

module.exports = friendsRouter