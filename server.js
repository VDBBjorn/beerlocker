var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var beerController = require('./controllers/beer');

mongoose.connect('mongodb://localhost:27017/beerlocker');

var app = express();
var port = process.env.PORT || 3000;
var router = express.Router();

app.use(bodyParser.urlencoded({
    extended: true
}));

router.route('/beers')
    .post(beerController.postBeers)
    .get(beerController.getBeers);
router.route('/beers/:beer_id')
    .get(beerController.getBeer)
    .put(beerController.putBeer)
    .delete(beerController.deleteBeer);

app.use('/api/v1', router);

app.listen(port);
console.log('Listening on ' + port);