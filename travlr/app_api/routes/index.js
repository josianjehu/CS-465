var express = require('express');
var router = express.Router();
var tripsController = require('../controllers/trips');
var authController = require('../controllers/authentication')
const {expressjwt: expressJwt } = require('express-jwt');

const auth = expressJwt({
    secret: process.env.JWT_SECRET,
    userProperty: "payload",
    algorithms: ["HS256"],
  });

/* GET home page. */
router.route('/trips').get(tripsController.tripList).post(auth, tripsController.tripsAddTrip);

router.route("/trips/:tripCode").get(tripsController.tripFindCode).put(auth, tripsController.tripsUpdateTrip);

router.route('/login').post(authController.login);

router.route('/register').post(authController.register);

module.exports = router;
