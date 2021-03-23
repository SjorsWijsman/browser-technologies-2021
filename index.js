const express = require('express');
const url = require('url');
const app = express();
const { queryToObject } = require('./modules/queryToObject');

// Set view engine to ejs
app.set('view engine', 'ejs');

// Set static folder
app.use(express.static('static'));

app.use(express.urlencoded({extended:true}));


// Home page
app.get('/', (req, res) => {
  res.render('index', {
    ...req.query,
  });
});

// Retrieve post reqs
app.post('/', (req, res) => {
  const queryString = queryToObject(req.headers.referer);

  res.redirect(url.format({
    pathname: '/',
    query: {
      ...queryString,
      ...req.body,
    },
  }));
});

// Open app on port
const port = process.env.PORT || 3000;
app.listen(port);
console.log(`App listening on ${port}`);
