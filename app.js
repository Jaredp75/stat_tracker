const express = require('express');
const mustacheExpress = require('mustache-express');
const session = require('express-session');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const mongodb = require('mongodb');

const app = express();

mongoose.Promise = require('bluebird');
const mongoURL = 'mongodb://localhost:27017/stat_api'

mongoose.connect(mongoURL, {
  useMongoClient: true
});

const User = require("./models/user");

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

// put routes here
const apiRouter = require("./routes/api");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.engine('mustache', mustacheExpress());
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'mustache')
// app.set('views', './views');







app.use('/api', apiRouter);





app.listen(3000, function () {
    console.log('Successfully started express application!')
});








// put routes here

// app.get('/favicon.ico', function(req, res) {
//  res.status(204);
// })

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
