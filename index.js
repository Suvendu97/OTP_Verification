const express = require("express");
const bodyParser = require("body-parser");
const app = express()

const port = 8000;

const expressLayouts = require('express-ejs-layouts');

const session = require('express-session');
// const passport = require('passport');

const sassMiddleware = require('node-sass-middleware');
// const flash = require('connect-flash');
// const customMware = require('./config/middleware');


app.use(sassMiddleware({
    src: './assets/scss',
    dest: './assets/css',
    debug: true,
    outputStyle: 'extended',
    prefix: '/css'
}));


app.use(express.static('./assets'));

app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);




// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//USE


app.use(bodyParser.urlencoded({extended: true}))
// app.use(express.static("public"))



// app.get('/', (req, res) => {
//     res.sendFile(__dirname + "/index.html");
// })

// app.post('/', (req, res) => {
//     obj[req.body.phone] = otp[0]
//     currentPhoneNum = parseInt(req.body.phone)
//     res.redirect("/otp")
// })

// app.get('/otp', (req, res) => {
//     res.sendFile(__dirname + "/otpVerification.html")
// })

// app.post('/otp', (req, res) => {
//     enteredotp = parseInt(req.body.entered_otp)
//     if (obj[currentPhoneNum] == enteredotp) {
//         res.sendFile(__dirname + "/SuccessfulVerification.html")
//     } else {
//         res.sendFile(__dirname + "/VerificationFailed.html")
//     }
// })

// app.use(passport.initialize());
// app.use(passport.session());


// app.use(flash());
// app.use(customMware.setFlash);

// use express router
app.use('/', require('./routes'));


app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});
