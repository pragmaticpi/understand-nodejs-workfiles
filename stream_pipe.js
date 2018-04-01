var fs = require('fs');

var readStream = fs.createReadStream(__dirname + "/hello.txt");

var writeStream = fs.createWriteStream(__dirname + "/hellocopy.txt");

readStream.pipe(writeStream);
 