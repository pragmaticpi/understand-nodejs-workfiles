var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
    res.render('index');
});


app.listen(port, '127.0.0.1', () => {
    console.log('Server started');
});