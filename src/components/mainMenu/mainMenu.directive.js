(function () {
angular.module('anaximander')
    .directive('mainMenu', [ 'authenticationService', mainMenu ]);

function mainMenu(authenticationService) {

    var directive = { 
        restrict: 'E',
        templateUrl: '/components/mainMenu/mainMenu.html',
        link: function ($scope, attrs, element) {
            
            $scope.signIn = signIn;

            function signIn () {
                authenticationService.signIn()
                    .then(function (user) {
                        $scope.$emit('signedIn', user);
                    });
            }

        }
    };

    return directive;
}

})();
