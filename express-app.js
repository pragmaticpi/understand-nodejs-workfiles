var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');

app.listen(3000, '127.0.0.1', function(){
    console.log('Server started');
});

// creates request body parser for Content-Type : x-www-form-url-encoded
var urlencodedParser = bodyParser.urlencoded( {extended: false});

// create request body parser for Content-Type : application/json
var jsonParser = bodyParser.json();

// custom middleware
app.use((req, res, next) => {
    console.log(req.url);
    next();
});

app.get('/:id', (req, res) => {

    //rendering html content using ejs template engine
    res.render('index', { ID: req.params.id });

    // res.send("<html><body>Hello World</body></html>");
})

app.get('/', (req, res) => {

    //rendering html content using ejs template engine
    res.render('person');
})

app.get('/json', (req, res) => {
    res.json({ firstName: 'Piyush'});
})

app.post('/person', urlencodedParser, (req, res) => {
    res.send('Submitted');
    console.log(req.body.firstname);
})