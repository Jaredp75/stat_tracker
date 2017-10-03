const express= require('express');
const path = require('path');
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const http = require('http');

const router = express.Router();


router.use(bodyParser.json());

const mongoURL = 'mongodb://localhost:27017/test_api';
const MongoClient = require('mongodb').MongoClient;

// const User = require("../models/user");

router.get('/', function(req, res) {
  res.json({ key: "This value is a string" });
})


//mongoose.createConnection(mongoURL, {useMongoClient: true});
//mongoose.Promise = require('bluebird');
//const MongoClient = require('mongodb').MongoClient;



router.get('/todos', function(req, res){
	  res.json([
	    {
	      item: "Go to TIY",
	      complete: true
	    },
	    {
	      item: "Wash the car",
	      complete: false
	    },
	    {
	      item: "Buy groceries",
	      complete: false
	    }
	  ]);
	});




	// router.get('/addEntry', function(req, res) {
	//   console.log("addEntry for user");
	//   res.render('addEntry');
	// });


	// router.post('/', function(req, res) {
	//   res.redirect('/');
	// });



	router.get('/activities', function(req, res){
	  res.json([
	    {
	      item: "activities",
	      complete: false
	    },
	    {
	      item: "Return library books",
	      complete: false
	    }
	  ]);
	});


	// Create a new activity for me to track.
	router.post('/activities', function(req, res){
	  res.json([
	    {
	      item: "post activities",
	      complete: false
	    },
	    {
	      item: "Mow the lawn",
	      complete: false
	    }
	  ]);
	});



	router.get('/activities/:id', function(req, res){
	  res.json([
	    {
	      item: "Go to the record store",
	      complete: false
	    },
	    {
	      item: "Turn in TIY daily project",
	      complete: false
	    }
	  ]);
	});






	router.delete('/activities/:id', function(req, res){
	  res.json([
	    {
	      item: "Book flights",
	      complete: false
	    },
	    {
	      item: "Pack bags for vacation",
	      complete: false
	    }
	  ]);
	});



	router.delete('/stats/:id', function(req, res){
	  res.json([
	    {
	      item: "Make lunch",
	      complete: false
	    },
	    {
	      item: "Do laundry",
	      complete: false
	    }
	  ]);
	});






// router.get('/activities/:id', function(req, res) {
//   User.find({_id: req.params.id}).then(function(results) {
//     return res.json(results);
//   });
// });
//
// router.put('/activities/:id', function(req, res) {
//   User.findOneAndUpdate(
//     {_id: req.params.id},
//     {activity: req.body.activity,
//       date: req.body.date,
//       amount: req.body.amount})
//       .then(function(results){
//         return res.json(results);
//       });
//   });
//
// router.post('/activities/:id/stats', function(req, res){
//
// });
//
// router.delete("/stats/:id", function(req, res){
//   User.findOne({id: req.params.id})
//   .then(function(results){
//     let tempdate = this.date;
//     console.log(tempdate);
//   });
//   User.delete({date: tempdate})
//   .then(function(results){
//     return res.json(results);
//   });
// });
//
// router.delete("/activities/:id", function(req, res){
//   User.deleteOne({_id: req.params.id})
//   .then(function(results){
//     return res.json(results);
//   });
// });
//
//
//
//
//
//
//
// //   let newActivity = new Activity(req,body);
// //   newActivity.save(function (activity) {
// //     res.json({activity: activity});
// //   })
// // })
//
// router.get("/activities", function(req, res) {
//   User.find().then(function(results) {
//     return res.json(results);
//   });
// });
//
//
//
// router.post("/api/activities", function(req, res) {
//   User.create(req.body).then(function(results) {
//       return res.json(results);
//   });
// });




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
