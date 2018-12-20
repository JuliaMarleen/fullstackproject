const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const db = mongoose.connect('mongodb://localhost/drinkAPI');

let Drink = require('./models/drinkModel');
let app = express();

let port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

let drinkRouter = express.Router();

drinkRouter.route('/Drinks')
.post(function(req, res){
    let drink = new Drink(req.body);

    console.log(drink);
    res.send(drink);
})
.get(function(req, res){
  let query = {};
  if (req.query.flavor){
    query.genre = req.query.flavor;
  }
  Drink.find(query, function(err, drinks){
    if(err)
      res.status(500).send(err);
    else
      res.json(drinks);
  });
});

drinkRouter.route('/Drinks:/drinkId')
.get(function(req, res){
  Drink.findById(req.params.drinkId, function(err, drink){
    if(err)
      res.status(500).send(err);
    else
      res.json(book);
  });
});

app.use('/api', drinkRouter);

app.get('/', function(req, res){
  res.send('welcome to my API')
});

app.listen(port, function(){
  console.log('running on port:' + port);
});