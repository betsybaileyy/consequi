// Requre dotenv
require('dotenv').config();

// Auth
var cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

// Initialize Libraries
const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const exphbs = require('express-handlebars');

const bodyParser = require('body-parser');
const expressValidator = require('express-validator');


// Connect to DB
require('./data/consequi-db');

// Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());

app.use(cookieParser());

var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/consequi-db', { useNewUrlParser: true });
//checkAuth middleware
var checkAuth = (req, res, next) => {
//  console.log("Checking authentication");
  if (typeof req.cookies.nToken === 'undefined' || req.cookies.nToken === null) {
    req.user = null;
  } else {
    var token = req.cookies.nToken;
    var decodedToken = jwt.decode(token, { complete: true }) || {};
    req.user = decodedToken.payload;
    console.log('checkauth user', req.user)
  }

  next()
}
app.use(checkAuth)

// Routes
require('./controllers/goals.js')(app);
require('./controllers/tasks.js')(app);
require('./controllers/auth.js')(app);
require('./controllers/replies.js')(app);
require('./controllers/users.js')(app);


// Server
app.listen(port, () => console.log(`consequi.js listening on port ${port}!`))




// module.exports = app;
