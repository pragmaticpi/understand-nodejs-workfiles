var util = require('util');

function Person(){
    this.firstname = 'Piyush' ,
    this.lastname = 'Kumar';
}

Person.prototype.greet = function() {
    console.log('Hello ' + this.firstname + ' ' + this.lastname);
}

function Student(){
    Person.call(this);
    this.id = 1;
}

Student.prototype = Object.create(Person.prototype);

// util.inherits(Student, Person);

var s = new Student();
s.greet();