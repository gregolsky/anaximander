(function () {

    angular.module('anaximander')
    .controller('AppCtrl', [ 
        '$scope', 
        'authenticationService', 
        AppCtrl 
    ]);

    function AppCtrl($scope, authenticationService) {

        var self = this;
        self.signIn = signIn;

        authenticationService.onAuthentication(onSignedIn);

        function signIn() {
            authenticationService.signIn();
        }

        function onSignedIn(authData) {
            if (authData) {
                self.user = authData.facebook.cachedUserProfile;
            }
        }
    }

})();
