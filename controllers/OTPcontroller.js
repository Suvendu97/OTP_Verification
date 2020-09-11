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
    obj[req.body.phone] = otp[0]
    currentPhoneNum = parseInt(req.body.phone)
    res.redirect("/otp")

}

module.exports.OTP = function(req, res){

    // render home page
    return res.render('otpVerification', {
        title: "Home",
    });
}


module.exports.checkOtp = function(req, res){

    enteredotp = parseInt(req.body.entered_otp)
    if (obj[currentPhoneNum] == enteredotp) {
        return res.render('SuccessfulVerification', {
            title: "Home",
        });

    } else {
        return res.render('VerificationFailed', {
            title: "Home",
        });

    }
}
