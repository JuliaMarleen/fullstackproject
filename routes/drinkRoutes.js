const express = require('express');

let routes = function(Drink){
    let drinkRouter = express.Router();

    drinkRouter.route('/')
    .options(function(req, res) {
        res.header('allow', ['OPTIONS, GET, POST'])
        res.header('Access-Control-Allow-Methods', ['OPTIONS,GET,POST'])
        res.sendStatus(200)
    })
    .post(function(req, res){
        if(!req.body.name || !req.body.flavor || !req.body.color || !req.body.price) {
            res.sendStatus(400)
        }
        else {
            let drink = new Drink(req.body);
            drink._links.self.href = "http://145.24.222.58:8000/api/drinks/" + drink._id
            drink._links.collection.href = "http://145.24.222.58:8000/api/drinks"
            drink.save();
            res.status(201).send(drink);
        }
    })
    .get(function(req, res){
        if(req.accepts('json')) {
            Drink.find(function(error, drinks){
                if(error) {
                    res.status(500).send(error);
                }
                else {
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
                }
            });
        }
        else {
            res.sendStatus(400)
        }
    });
    
    drinkRouter.use('/:drinkId', function(req, res, next){
        Drink.findById(req.params.drinkId, function(error, drink){
            if(error)
              res.status(500).send(error);
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
    .options(function(req, res) {
        res.header('Access-Control-Allow-Methods', 'OPTIONS,GET,PUT,PATCH,DELETE')
        res.sendStatus(200)
    })
    .get(function(req, res){
        res.json(req.drink)
    })
    .put(function(req, res){
        if(!req.body.name || !req.body.flavor || !req.body.color || !req.body.price) {
            res.sendStatus(400)
        }
        else {
            req.drink.name = req.body.name;
            req.drink.flavor = req.body.flavor;
            req.drink.color = req.body.color;
            req.drink.price = req.body.price;
            req.drink.save(function(error){
                if(error)
                res.status(500).send(error);
                else
                res.json(req.drink);
            });
        }
    })
    .patch(function(req, res){
        if(req.body._id){
            delete req.body._id;
        }
        for(let d in req.body){
            req.drink[d] = req.body[d];
        }
        req.drink.save(function(error){
            if(error)
            res.status(500).send(error);
            else
            res.json(req.drink);
        });
    })
    .delete(function(req, res){
        req.drink.remove(function(error){
            if (error)
            res.status(500).send(error);
            else
            res.status(204).send('removed');
        });
    });
    return drinkRouter;
};

module.exports = routes