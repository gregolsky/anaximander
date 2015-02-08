(function () {

    angular.module('anaximander')
    .factory('authenticationService',
            [
                '$q',
                'FIREBASE_URL',
                authenticationServiceFactory
            ]);

    function authenticationServiceFactory($q, FIREBASE_URL) {

        return {
            signIn: signIn   
        };

        function signIn() {

            var ref = new Firebase(FIREBASE_URL);

            var deferred = $q.defer();

            ref.authWithOAuthPopup("facebook", function(error, authData) {
                if (error) {
                    deferred.reject(error);
                } else {
                    deferred.resolve(authData);
                }
            });

            return deferred.promise;
        }
        
    }

})();
