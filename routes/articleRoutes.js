  const {Link} = require('../models')

  module.exports = app => {

    // // GET all users
    app.get('/links', (req, res) => {
      Link.find({})
        .populate('posts')
        .then(links => res.json(links))
        .catch(e => console.log(e))
    })

  }