function getHbsSite(req, res) {
    res.render('index', {
        title: 'Dynamic World',
        caption: 'let\'s go to France!'
    })
}

module.exports = {
    getHbsSite
}