(function() {

    angular.module('anaximander')
    .factory('mapFactory', [ 'Map', createMapFactory ]);

    function createMapFactory(Map) {
        return new MapFactory();

        function MapFactory() {

        }

        MapFactory.prototype.create = create;

        function create(data) {

        }
    }

})();
