otp = [1234]
currentPhoneNum = 9191
obj = {}


module.exports.home = function(req, res){

    // render home page
    return res.render('home', {
        title: "Home",
    });
}



module.exports.generateOtp = function(req, res){
    obj[req.body.phone] = otp[0];
    countryCode = req.body.country;
    currentPhoneNum = parseInt(req.body.phone);
    console.log(req.body);
    req.flash('success', 'SMS sent, please Enter OTP');
    res.redirect("/otpSent");

}

module.exports.resend = function(req, res){

    // render home page
    req.flash('success', 'SMS sent, please Enter OTP');
    return res.redirect('back');
}

module.exports.sentOTP = function(req, res){
    return res.render('otpVerification', {
        title: "OTP Verification",
    });
}


module.exports.checkOtp = function(req, res){

    enteredotp = parseInt(req.body.entered_otp)
    if (obj[currentPhoneNum] == enteredotp) {
        req.flash('success', 'Last Verification was Successful');
        return res.render('SuccessfulVerification', {
            title: "AdmitKard",
        });

    } else {
        req.flash('error', 'Last Verification was Failed');
        return res.render('VerificationFailed', {
            title: "Verification Failed",
        });

    }
}


