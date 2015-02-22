(function () {

    angular.module('anaximander')
    .factory('query', [ '$q', 'firebaseUtil', queryFactory ]);

    function queryFactory($q, firebaseUtil) {

        function Query(path, queryFn) {
            this.ref = firebaseUtil.ref(path);
            this.queryFn = queryFn;
            this.deferred = $q.defer();
        }

        Query.prototype.destroy = destroy;
        Query.prototype.subscribe = subscribe;

        return {
            create: create   
        };

        function create(path, queryFn) {
            return new Query(path, queryFn);
        };

        function destroy() {
            this.ref.off();
            this.deferred.resolve();
        }

        function subscribe() {
            var self = this;

            self.queryFn(self.ref, function (data) {
                self.deferred.notify(data);    
            });

            return self.deferred.promise;
        }
    }


})();
