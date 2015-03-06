(function () {

    angular.module('anaximander')
    .factory('mapQueries', [ 'query', mapQueries ]);

    function mapQueries(query) {

        return {
           latest10: latest10,
           byId: byId
        };

        function latest10() {
            return query.create('/maps', function(ref, cb) {
                ref
                .orderByChild('ts')
                .limitToLast(10)
                .on('value', function (snapshot) {
                   var result = _.map(snapshot.val(), function (val, name) {
                        val.id = name;
                        return val;
                   });

                   cb(result);
                });
            });
        }

        function byId(id) {
            return query.create('/maps/' + id, function(ref, cb) {
                ref
                .on('value', function (snapshot) {
                   var result = snapshot.val();
                   cb(result);
                });
            });
        }

    }

})();
