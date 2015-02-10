(function () {

    angular.module('anaximander')
    .factory('firebaseUtil',[ 'FIREBASE_URL', firebaseUtil ]);

    function firebaseUtil(FIREBASE_URL) {
        return {
            ref: ref

        };

        function ref(path) {
            return new Firebase(FIREBASE_URL + '/' + path);
        }
    }

})(); 
