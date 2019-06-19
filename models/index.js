const { Schema, model } = require('mongoose')

const db = {
  Link: require('./Link.js')(Schema, model),
  Post: require('./Post.js')(Schema, model)
}

module.exports = db