var axios = require('axios');
var cheerio = require('cheerio');

module.exports.getRestaurants = function (callback) {
  var url = 'https://www.ele.me/restapi/shopping/restaurants?extras%5B%5D=activities&geohash=yb4h78m43x2&latitude=45.74887&limit=24&longitude=126.72324&offset=0&terminal=web';
  axios.get(url).then(function (response) {
    var restaurants = response.data;

    callback(restaurants);
  });
}

module.exports.getMenuByRestaurantId = function (restaurantId, callback) {
  var url = 'https://www.ele.me/restapi/shopping/v2/menu?restaurant_id='
    + restaurantId;

  axios.get(url).then(function (response) {
    var menu = response.data;

    callback(menu);
  });
};
