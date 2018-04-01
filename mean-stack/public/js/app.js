angular.module('TestMeanApp',[]);

angular.module('TestMeanApp').controller('MainController', ctrlFunc);


function ctrlFunc(){
    this.message = 'Hello';

    this.people = [
        {
            name: 'Piyush'
        },
        {
            name: 'Kumar'
        }
    ]
}
