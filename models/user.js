const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  activity: {
    type: String,
    required: true
  },
  date: {
    type: String
  },
  amount: {
    type: String
  }

});


const User = mongoose.model('User', userSchema);

module.exports = User;
