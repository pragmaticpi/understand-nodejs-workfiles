var helloWorld = function(){
    console.log('Hello World');
}

greetHello(helloWorld);

greetHello(function () {
    console.log('Hello');
});

function greetHello(func){
    func();
}
