(function () {

    angular.module('anaximander')
    .factory('guard', defineGuard);

    function defineGuard() {
        return guard;
    }

    function guard(condition) {
        if (!condition) {
            throw new Error('Condition not met');
        }
    }

})();
