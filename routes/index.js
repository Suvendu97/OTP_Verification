const express = require('express');

const router = express.Router();
const OTPcontroller = require('../controllers/OTPcontroller');

console.log('router loaded');

// setup requested routes

router.get('/', OTPcontroller.home);
router.post('/', OTPcontroller.generateOtp);
router.get('/otp', OTPcontroller.OTP);
router.post('/otp', OTPcontroller.checkOtp);
// exports this file
module.exports = router;