// var emitter = require('./emitter');
var events = require('events');
var utils = require('util');

// var emtr = new emitter();

// emtr.on('greet', function(){
//     console.log('Hello World');
// });

// emtr.emit('greet');

function Hello(){
    this.greeting = "Hello";
}

utils.inherits(Hello, events);

Hello.prototype.greet = function () {
    console.log(this.greeting);
    this.emit('hello');
}

var hello = new Hello();

hello.on('hello', function(){
    console.log('hello again');
});

hello.greet();