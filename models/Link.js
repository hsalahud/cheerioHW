module.exports = (Schema, model) => {
  const Link = new Schema({
    title: {
      type: String
    },
    link: {
      type: String
    },
    summary: {
      type: String
    },
    posts: [{
      type: Schema.Types.ObjectId,
      ref: 'Post'
    }]
  })

  return model('Link', Link)
}