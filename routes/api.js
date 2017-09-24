const express= require('express');
const path = require('path');
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const router = express.Router();


router.use(bodyParser.json());

//const mongoURL = 'mongodb://localhost:27017/test';

const User = require("../models/user");



//mongoose.createConnection(mongoURL, {useMongoClient: true});
//mongoose.Promise = require('bluebird');
//const MongoClient = require('mongodb').MongoClient;


router.get('/activities/:id', function(req, res) {
  User.find({_id: req.params.id}).then(function(results) {
    return res.json(results);
  });
});

router.put('/activities/:id', function(req, res) {
  User.findOneAndUpdate(
    {_id: req.params.id},
    {activity: req.body.activity,
      date: req.body.date,
      amount: req.body.amount})
      .then(function(results){
        return res.json(results);
      });
  });

router.post('/activities/:id/stats', function(req, res){

});

router.delete("/stats/:id", function(req, res){
  User.findOne({id: req.params.id})
  .then(function(results){
    let tempdate = this.date;
    console.log(tempdate);
  });
  User.delete({date: tempdate})
  .then(function(results){
    return res.json(results);
  });
});

router.delete("/activities/:id", function(req, res){
  User.deleteOne({_id: req.params.id})
  .then(function(results){
    return res.json(results);
  });
});







//   let newActivity = new Activity(req,body);
//   newActivity.save(function (activity) {
//     res.json({activity: activity});
//   })
// })

router.get("/activities", function(req, res) {
  User.find().then(function(results) {
    return res.json(results);
  });
});



router.post("/api/activities", function(req, res) {
  User.create(req.body).then(function(results) {
      return res.json(results);
  });
});




//router.get('/activities', function(req, res) {
//  User.find().then(function(results) {
//    return res.json(results);
//  });
//});



//router.post('/activities', function(req, res) {
//  User.create(req.body).then(function(results) {
//    return res.join(results);
//  });
//});




module.exports = router;
