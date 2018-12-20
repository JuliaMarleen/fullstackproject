const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const db = mongoose.connect('mongodb://localhost/drinkAPI');

let Drink = require('./models/drinkModel');
let app = express();

let port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

drinkRouter = require('./routes/drinkRoutes')(Drink);

app.use('/api/drinks', drinkRouter);

app.get('/', function(req, res){
  res.send('welcome to my API')
});

app.listen(port, function(){
  console.log('running on port:' + port);
});