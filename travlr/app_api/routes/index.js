var express = require('express');
var router = express.Router();
var tripsController = require('../controllers/trips');

/* GET home page. */
router.route('/trips').get(tripsController.tripList).post(tripsController.tripsAddTrip);

router.route("/trips/:tripCode").get(tripsController.tripFindCode).put(tripsController.tripsUpdateTrip);

module.exports = router;
