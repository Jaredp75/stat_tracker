const mongoose = require('mongoose');

const statSchema = new mongoose.Schema({
  date: {type: String},
  username: {type: String},
  ft made: Number,
  ft taken: Number,
  amountType: (type: String),
},
  {timestamps: true}
);


const User = mongoose.model('User', userSchema);

module.exports = User;
