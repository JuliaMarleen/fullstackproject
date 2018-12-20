const express = require('express');

let routes = function(Drink){
    let drinkRouter = express.Router();

    drinkRouter.route('/')
    .options(function(req, res) {
        res.header('Access-Control-Allow-Methods', 'OPTIONS,GET,POST');
    })
    .post(function(req, res){
        let drink = new Drink(req.body);
        drink._links.self.href = "http://145.24.222.58:8000/api/drinks/" + drink._id
        drink._links.collection.href = "http://145.24.222.58:8000/api/drinks"
        drink.save();
        res.status(201).send(drink);
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
            res.json({
                items: drinks,
                _links: {
                    self: {
                        href: "http://145.24.222.58:8000/api/drinks"
                    }
                },
                pagination: {
                    currentPage: 1,
                    currentItems: 33,
                    totalPages: 1,
                    totalItems: 33,
                    _links: {
                        first: {
                            page: 1,
                            href: "https://docent.cmi.hro.nl/bootb/demo/notes/"
                        },
                        last: {
                            page: 1,
                            href: "https://docent.cmi.hro.nl/bootb/demo/notes/"
                        },
                        previous: {
                            page: 1,
                            href: "https://docent.cmi.hro.nl/bootb/demo/notes/"
                        },
                        next: {
                            page: 1,
                            href: "https://docent.cmi.hro.nl/bootb/demo/notes/"
                        }
                    }
                }
            })
      });
    });
    
    drinkRouter.use('/:drinkId', function(req, res, next){
        Drink.findById(req.params.drinkId, function(err, drink){
            if(err)
              res.status(500).send(err);
            else if (drink){
              req.drink = drink
              next();
            }
            else {
              res.status(404).send('No drink found');
            }
          });
    })

    drinkRouter.route('/:drinkId')
    .get(function(req, res){
        res.json(req.drink)
    })
    .put(function(req, res){
        req.drink.name = req.body.name;
        req.drink.flavor = req.body.flavor;
        req.drink.color = req.body.color;
        req.drink.price = req.body.price;
        req.drink.save(function(err){
            if(err)
            res.status(500).send(err);
            else
            res.json(req.drink);
        });
    })
    .patch(function(req, res){
        if(req.body._id){
            delete req.body._id;
        }
        for(let d in req.body){
            req.drink[d] = req.body[d];
        }
        req.drink.save(function(err){
            if(err)
            res.status(500).send(err);
            else
            res.json(req.drink);
        });
    })
    .delete(function(req, res){
        req.drink.remove(function(err){
            if (err)
            res.status(500).send(err);
            else
            res.status(204).send('removed');
        });
    });
    return drinkRouter;
};

module.exports = routes