const express = require('express');
const mustacheExpress = require('mustache-express');
const session = require('express-session');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const models = require("./models/user");
const User = models.User;

const app = express();

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/test');


app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
//    store: new(require('express-sessions'))({
//        storage: 'mongodb',
//        instance: mongoose, // optional
//        host: 'localhost', // optional
//        port: 27017, // optional
//        db: 'test', // optional
//        collection: 'sessions', // optional
//        expire: 86400 // optional
//    })
}))




app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('mustache', mustacheExpress());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'mustache')
app.set('views', './views');




// put routes here

app.use('/', rootRouter);
app.use('/api', apiRouter);

app.get('/activities', function(req, res) {
  User.find().then(function(user) {
    Stat.find().then(function(stat) {
      res.render('addEntry', {user: user, stat: stat});
    });
  });
});


app.post('/add_task/', function(req, res) {
  console.log(req.body);
  User.create(req.body).then(function(user) {
    res.redirect('/');
  });
});

app.get("/activities/:id", function  (req, res) {
  req.session.activityid = req.params.id;
  console.log("ID: " + req.params.id);
  User.findOne({_id: req.params.id}).then(function(user) {
    res.render('addEntry', {user: user});
  });
});

app.post("/api/activities/:id", function  (req, res) {
  let activity = req.body.activity;
  let id = req.params.id;
  console.log("ID: "+req.params.id+", Activity: "+activity);
  User.findOneAndUpdate({_id: req.params.id}, {activity: activity}).then(function(user) {
    console.log("updated");
    res.redirect('/activities');
  });
});



app.post("/api/activities/:id/delete", function  (req, res) {
	let id = req.params.id;
  let query = {_id:id};
  console.log("Query: "+query);
  User.remove(query).then(function(user) {
    console.log("deleted");
    res.redirect('/activities');
  });


  app.post("/api/activities/:id/stats", function  (req, res) {
    let id = req.params.id;
    let activity = req.body.activity;
  	let amount = req.body.amount;
  	let newstat = {"activityId": req.body.activity, "identifier": id, "amount": req.body.amount, "create_date": req.body.date}
    console.log(req.body);
    console.log("ID: "+req.params.id+", Activity: "+req.body.activity+", Amount: "+req.body.amount+", Date: "+req.body.date);
    Stat.create(newstat).then(function(user) {
      console.log("added a stat");
      res.redirect('/activities');
    });
  });

  app.post("/api/stats/:id", function  (req, res) {
	let id = req.params.id;
  let query = {_id:id};
  Stat.remove(query).then(function(stat) {
    console.log("deleted stat");
    res.redirect('/activities');
  });
});




app.listen(port, function () {
    console.log('Successfully started express application!')
});








// put routes here

//app.get('/favicon.ico', function(req, res) {
//  res.status(204);
//})

//app.get('/add/', function (req, res) {
//  res.render('add_player');
//});

//app.post('/add/', function (req, res) {
//  Player.create(req.body)
//  .then(function (player) {
//    res.redirect('/');
//  })
//});


//app.get('/:id/', function (req, res) {
//  Player.findOne({_id: req.params.id}).then(function (player) {
//    res.render("player_profile", {player: player});
//  })
//});

//app.get('/:id/update/', function (req, res) {
//  Player.findOne({_id: req.params.id}).then(function (player) {
//    res.render("update_player_profile", {player: player});
//  })
//});




//app.get('/:id/update/', function (req, res) {
//  Player.findOneAndUpdate({_id: req.params.id}, req,body).then(function (player) {
//    res.redirect("/");
//  })
//})

//app.get('/:id/add_stats/', function (req, res) {
//  Player.findOne({_id: req.params.id}).then(function (player) {
//    res.render("add_stats", {player: player});
//  })
//})

//app.post('/:id/add_stats/', function (req, res) {
//  Player.findOne({_id: req.params.id}).then(function (player) {
//    player.stats.push(req.body);
//    player.save().then(function () {
//      res.render("add_stats", {player: player});
//    })
//  })
//})

//app.post('/:id/delete', function (req, res) {
//  Player.findOneAndRemove({_id: req.params.id}).then(function (player) {
//    res.redirect('/');
//  })
//});


//app.get('/', function (req, res) {
//  Player.find().then(function (player) {
//    res.render('index', {player: player});
//  })
//})
