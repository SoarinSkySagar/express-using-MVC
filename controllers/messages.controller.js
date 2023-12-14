function getMessages(req, res) {
    res.send('<ul><li>Hello Sagar!</li></ul>')
}

function postMessage(req, res) {
    res.send('Message created!')
}

module.exports = {
    getMessages,
    postMessage
}