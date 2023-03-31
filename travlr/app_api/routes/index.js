var express = require('express');
var router = express.Router();
var controller = require('../controllers/trips');

/* GET home page. */
router.route("/trips").get(controller.tripList);

router.route("/trips/tripCode").get(controller.tripFindCode);

module.exports = router;
