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
