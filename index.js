const express = require('express');
const url = require('url');
const app = express();
const fingerprint = require('express-fingerprint');
const { getUserData, storeNewShirt } = require('./modules/userDataHandler');
const { queryToObject, cleanUpQuery } = require('./modules/queryTools');
const { shirtData } = require('./data/appData');
const { userData } = require('./data/userData');

// Set view engine to ejs
app.set('view engine', 'ejs');

// Set static folder
app.use(express.static('static'));

// Body parsing middleware
app.use(express.urlencoded({extended:true}));

app.use(fingerprint());

// Open app on port
const port = process.env.PORT || 3000;
app.listen(port);
console.log(`App listening on ${port}`);

// Home page
app.get('/', (req, res) => {
  res.render('index', {
    shirtData,
    ...req.query,
  });
});

// Retrieve post reqs
app.post('/', (req, res) => {
  const queryString = queryToObject(req.headers.referer);

  res.redirect(url.format({
    pathname: '/',
    query: cleanUpQuery({
      ...queryString,
      ...req.body,
    }),

  }));
});

// Get shirt data
app.get('/shirts', (req, res) => {
  const userData = getUserData(req.fingerprint.hash);
  console.log(userData);
  res.render('shirts', {
    shirtData,
    userData,
  });
});

// Post shirt data
app.post('/shirts', (req, res) => {
  const queryString = queryToObject(req.headers.referer);
  const userData = storeNewShirt(req.fingerprint.hash, cleanUpQuery(queryString));
  res.redirect('/shirts');
});
