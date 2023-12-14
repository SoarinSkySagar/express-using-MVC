const path = require('path')

function getMessages(req, res) {
    // res.send('<ul><li>Hello Sagar!</li></ul>')
    // res.sendFile(path.join(__dirname, '..', 'public', 'images', 'skimountain.jpg'))
    res.render('messages', {
        title: 'Messages',
        friend: 'test 1',
        msg: 'hello!!!!'
    })
}

function postMessage(req, res) {
    res.send('Message created!')
}

module.exports = {
    getMessages,
    postMessage
}