const express = require('express');

const router = express.Router();
const OTPcontroller = require('../controllers/OTPcontroller');

console.log('router loaded');

// setup requested routes

router.get('/', OTPcontroller.home);
router.post('/generateOTP', OTPcontroller.generateOtp);
router.post('/resendOTP', OTPcontroller.resend);
router.get('/otpSent', OTPcontroller.sentOTP);
router.post('/checkOTP', OTPcontroller.checkOtp);

// exports this file
module.exports = router;