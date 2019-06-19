const { Post, Link } = require('../models')


module.exports = app => {
  // GET all posts
  app.get('/posts', (req, res) => {
    Post.find({})
      .populate('link')
      .then(posts => {
        res.json(posts)
      })
      .catch(e => console.log(e))
  })

  // POST a post
  app.post('/posts', (req, res) => {
    Post.create(req.body)
      .then(({ _id, link }) => {
        Link.update({ _id: link }, { $push: { posts: _id} })
          .then(_ => res.sendStatus(200))
          .catch(e => console.log(e))
      })
      .catch(e => console.log(e))
  })
}
