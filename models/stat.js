const mongoose = require('mongoose');

const statSchema = new mongoose.Schema({
  activityId: {
    type: String
  },

  identifier: {
    type: String
  },

    amount: {
      type: String
    },

    create_date: {
      type: Date,
      default: Date.now
    }
});

    //title: { type: String, required: true },
    //snippetbody: String,
    //notes: String,
    //language: String,
    //tags: [String]
})





const Stat = mongoose.model('Stat', statSchema);

module.exports = Stat;
