const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  activity: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  amount: {
    type: Number,
    default: 1
  }

});


const User = mongoose.model('User', userSchema);

module.exports = User;
