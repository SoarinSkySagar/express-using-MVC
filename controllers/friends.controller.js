const friends = require('../models/friends.model')

function postFriend(req, res) {
    if (!req.body.name) {
        res.status(400).json({
            error: 'Missing friend name'
        })
    } else {
        const newFriend = {
            id: friends.length,
            name: req.body.name
        }
        friends.push(newFriend)
        res.json(newFriend)
    }
}

function searchFriend(req, res) {
    const id = Number(req.params.friendId)
    const friend = friends[id]
    if (friend) {
        res.json(friend)
    } else {
        res.status(404).json({
            error: "Friend does not exist"
        })
    }
}

function listFriends(req, res) {
    res.json(friends)
}

function logIP(req, res, next) {
    console.log('IP Address:', req.ip)
    next()
}

module.exports = {
    postFriend,
    searchFriend,
    listFriends,
    logIP
}