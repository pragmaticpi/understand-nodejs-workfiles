function Rectangle(width,height) {
    this.width = width;
    this.height = height;
}

Rectangle.prototype.area = function() {
    return this.width * this.height;
}

Rectangle.prototype.add = function() {
    return this.width + this.height;
}

function Square(length){
    this.width = this.height = length;
}

Square.prototype = Object.create(Rectangle.prototype);

var rect = new Rectangle(3,4);

console.log(rect.add());
console.log(new Square(4).add());