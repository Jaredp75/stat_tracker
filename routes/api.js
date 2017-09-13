const express= require('express');
const path = require('path');
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const router = express.Router();


router.use(bodyParser.json());

//const mongoURL = 'mongodb://localhost:27017/test';

const Stat = require("../models/user");



//mongoose.createConnection(mongoURL, {useMongoClient: true});
//mongoose.Promise = require('bluebird');
//const MongoClient = require('mongodb').MongoClient;


router.get("/activities/:id", function(req, res) {
  User.find({_id: req.params.id}).then(function (results) {
    return res.json(results);
  });
});

router.put('/activities/:id', function(req, res){
  User.findOneAndUpdate(
    {_id: req.params.id},
    {activity: req.body.activty,
      date: req.body.date,
      amount: req.body.amount})
      .then(function (results) {
      return res.json(results);
  });
});

router.delete('/stats/:id', function(req, res){
  User.findOne({_id: req.params.id}).then(function(results) {
    let tempdate = this.date;

  });
  User.delete({date: tempdate}).then(function(results) {
    return res.json(results);
  });
});


router.get('/activities', function(req, res) {
  User.find().then(function(results) {
    return res.json(results);
  });
});



router.post




module.exports = router;
