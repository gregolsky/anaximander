(function () {

    angular.module('anaximander')
    .controller('DisplayMapCtrl', [ 
        '$stateParams', 
        'mapQueries',
        'mapRepository', 
        MapDisplayController ]);

    function MapDisplayController($stateParams, mapQueries, mapRepository) {

        var self = this;
        this.map = null;

        mapQueries.byId($stateParams.mapId)
            .subscribe()
            .then(null, null, function (map) {
                self.map = map;
            });

    }

    

}());
