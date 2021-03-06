const express = require("express");
const bodyParser = require("body-parser");
const app = express()

const port = 8000;

const expressLayouts = require('express-ejs-layouts');

const session = require('express-session');
const passport = require('passport');

const sassMiddleware = require('node-sass-middleware');
const flash = require('connect-flash');
const customMware = require('./config/middleware');


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
app.use(session( {
    name: 'OTPverification',
    // ToDO change the secret before deployment in production mode
    secret:'blaSomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    }
    
}));

app.use(bodyParser.urlencoded({extended: true}));



app.use(passport.initialize());
app.use(passport.session());


app.use(flash());
app.use(customMware.setFlash);

// use express router
app.use('/', require('./routes'));


app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});
