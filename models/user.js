const mongoose = require('mongoose');

const statSchema = new mongoose.Schema({
  username: {type: String},
  date: {type: String},
  activity: {type: String},
  amount: Number,
  amountType: (type: String),
},
  {timestamps: true}
);


const User = mongoose.model('User', userSchema);

module.exports = {
    User
}
