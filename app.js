const express = require('express');
const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost/fullstackAPI');

let book = require('./models/bookModel');
let app = express();

let port = process.env.PORT || 3000;

let bookRouter = express.Router();

bookRouter.route('/Books')
.get(function(req, res){
  let responseJson = {hello: "this is my api"}
  res.json(responseJson)
})
// .post(function(req, res){
//     var responseJson = {hello: "this is my api"}

//     res.json()
// });

app.use('/api', bookRouter);

app.get('/', function(req, res){
  res.send('welcome to my API')
});

app.listen(port, function(){
  console.log('running on port:' + port);
});