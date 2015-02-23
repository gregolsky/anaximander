(function() {

    angular.module('anaximander')
    .factory('mapFactory', [ 'Map', defineMapFactory ]);

    function defineMapFactory(Map) {
        MapFactory.prototype.create = create;

        return new MapFactory();

        function MapFactory() { }

        function create(data) {
            return new Map(data);
        }
    }

})();
