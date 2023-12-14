const path = require('path')

function getMessages(req, res) {
    // res.send('<ul><li>Hello Sagar!</li></ul>')
    path.join(__dirname, '..', 'public', 'skimountain.jpg')
    res.sendFile(path.join(__dirname, '..', 'public', 'images', 'skimountain.jpg'))
}

function postMessage(req, res) {
    res.send('Message created!')
}

module.exports = {
    getMessages,
    postMessage
}