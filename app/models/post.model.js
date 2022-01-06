module.exports = (mongoose) => {
  const Data = mongoose.Schema(
    {
      title: String,
      body: String,
      published: Boolean,
    },
    { timestamps: true }
  );
  Schema.method('toJSON', function () {
    const { __v, _id, ...Object } = this.toObject();
    Object.id = _id;
    return object;
  });
  const Post = mongoose.model('posts', schema);
  return Post;
};
