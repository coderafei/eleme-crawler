var eleme = require('./eleme');
var express = require('express');

var app = express();

app.use(express.static('./public'));

app.get('/restaurants', function (req, res) {
  eleme.getRestaurants(function (restaurants) {
    res.json(restaurants);
  });
});

app.get('/menu', function (req, res) {
  var restaurantId = req.query.restaurantId;

  eleme.getMenuByRestaurantId(restaurantId, function (menu) {
    res.send(menu);
  });
});

app.listen(3000, function() {
  console.log('server start');
});
