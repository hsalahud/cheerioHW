module.exports = (Schema, model) => {
  const Post = new Schema({
    body: {
      type: String
    },
    link: {
      type: Schema.Types.ObjectId,
      ref: 'Link'
    }
  })

  return model('Post', Post)
}