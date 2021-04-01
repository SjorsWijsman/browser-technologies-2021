const express = require('express');
const url = require('url');
const app = express();
const fingerprint = require('express-fingerprint');
const { getUserData, storeNewShirt, removeShirt, addOrder, removeOrder } = require('./modules/userDataHandler');
const { queryToObject } = require('./modules/queryTools');
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
  const query = req.query;
  res.render('index', {
    shirtData,
    ...query,
  });
});

// Retrieve post reqs
app.post('/', (req, res) => {
  const queryString = queryToObject(req.headers.referer);

  console.log(req.body)

  let query = {
    ...queryString,
    ...req.body,
  };

  res.redirect(url.format({
    pathname: '/',
    query: query,
  }));
});


// Get shirt data
app.get('/shirts', (req, res) => {
  const userData = getUserData(req.fingerprint.hash);
  res.render('shirts', {
    shirtData,
    userData,
  });
});

// Post shirt data
app.post('/shirts', (req, res) => {
  const queryString = queryToObject(req.headers.referer);
  const userData = storeNewShirt(req.fingerprint.hash, queryString);
  res.redirect('/shirts');
});


// Remove shirt
app.post('/removeshirt/:index', (req, res) => {
  removeShirt(req.fingerprint.hash, parseInt(req.params.index))
  res.redirect('/shirts')
})


// Order overview
app.get('/order', (req, res) => {
  const userData = getUserData(req.fingerprint.hash);
  res.render('order', {
    userData,
  })
})

app.post('/ordershirt/:index', (req, res) => {
  addOrder(req.fingerprint.hash, parseInt(req.params.index))
  res.redirect(req.headers.referer)
})

app.post('/removeorder/:index', (req, res) => {
  removeOrder(req.fingerprint.hash, parseInt(req.params.index))
  res.redirect(req.headers.referer)
})


// Order confirmation
app.post('/order-confirmation', (req, res) => {
  const userData = getUserData(req.fingerprint.hash);
  res.render('order-confirmation', {
    userData,
  })
})
