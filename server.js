var http = require('http');
var fs = require('fs');


http.createServer( (req, res) => {

    if(req.url == "/json"){
        res.writeHead(200, { 'Content-type' : 'application/json'} );
        var obj = {
            firstName: 'Piyush',
            lastName: 'Kumar'
        }
        res.end(JSON.stringify(obj));
        console.log(req);
    } else {
        res.writeHead(200, { 'Content-Type' : 'text/html'});
        var html = fs.readFileSync(__dirname + "/index.html");
        res.end(html);
    }
    
}).listen(1337, '127.0.0.1');