var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var users = [];

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/', function (req, res) {
  console.log("running GET#/");
  res.send('Hello World!');
});

app.get('/users', function(req, res) {
  res.send(users);
});

app.get('/user/:id', function(req, res) {
  res.send(users[parseInt(req.params.id)]);
});

app.post('/user', function(req, res) {
  var user = {
    id: users.length + 1,
    name: req.body.name,
    username: req.body.username,
    password: req.body.password
  };
  users.push(user);
  res.send(user);
});

app.put('/user/:id', function(req, res) {
  res.send();
});

app.delete('/user/:id', function(req, res) {
  delete users[parseInt(req.params.id) - 1];
  users = users.filter(function(user) {
    return user !== null;
  });
  res.send();
});

var server = app.listen(3000);


// GET
//  /users
//  /user/1

// POST
//  /user

// PUT
//  /user/1

// DELETE
//  /user/1
