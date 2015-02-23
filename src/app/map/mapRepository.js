(function () {

    angular.module('anaximander')
    .factory(
        'mapRepository', 
        [
            'firebaseUtil',
            'guard',
            'Map',
            createMapRepository 
        ]);

        function createMapRepository(firebaseUtil, Map) {
            return {
                save: save,
                get: get,
            };

            function save(map) {
                //TODO use q onComplete and return promise
                guard(map instanceof Map);

                if (map.id) {
                    var ref = buildRef(map.id);
                    ref.update(map.data());
                    return;
                }

                buildRef().push(map.data());
            }

            function get(mapId) {

            }

            function buildRef(mapId) { 
                var ref = firebaseUtil.ref('/maps'); 
                if (mapId) {
                    return ref.child(mapId);
                }

                return ref;
            };

        }
})();
