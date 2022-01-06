const mongoose = require('mongoose');
const x = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
  },
});
module.exports = mongoose.model('post', x);
