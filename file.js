var fs = require('fs');

var fsData = fs.readFile(__dirname + "/hello.txt", 'utf8', function(err, data){
    if(err){
        console.log('Error:',err);
    } else {
        console.log(data);
    }
});