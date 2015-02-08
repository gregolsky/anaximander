(function () {
angular.module('anaximander')
    .directive('mainMenu', [ mainMenu ]);

function mainMenu() {

    var directive = { 
        restrict: 'E',
        templateUrl: '/components/mainMenu/mainMenu.html',
        scope: false
    };

    return directive;
}

})();
