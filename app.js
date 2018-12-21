const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const db = mongoose.connect('mongodb://localhost/drinkAPI', {useNewUrlParser: true});

let Pagination = require('./pagination')
let Drink = require('./models/drinkModel');
let app = express();

let port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin",  "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

drinkRouter = require('./routes/drinkRoutes')(Drink);

app.use('/api/drinks', drinkRouter);

app.get('/', function(req, res){
  res.send('welcome to my API')
});

app.listen(port, function(){
  console.log('running on port:' + port);
});