module.exports = app => {
  require('./cheerioRoute.js')(app)
  require('./articleRoutes.js')(app)
  require('./postRoutes.js')(app)
}