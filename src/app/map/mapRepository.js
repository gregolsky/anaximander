(function () {

    angular.module('anaximander')
    .factory(
        'mapRepository', 
        [
            'firebaseUtil',
            createMapRepository 
        ]);

        function createMapRepository(firebaseUtil) {
            return new MapRepository(firebaseUtil);
        }

        function MapRepository(firebaseUtil) { 
            this.firebaseUtil = firebaseUtil;
        }

        MapRepository.prototype.save = save;
        MapRepository.prototype.get = get;
        MapRepository.prototype.buildRef = buildRef;

        function save(map) {

        }

        function get(mapId) {

        }

        function buildRef() { 
            return this.firebaseUtil.ref('/maps'); 
        };

})();
