'use strict';

angular.module('anaximander')
.controller('MainCtrl', [ 
    '$scope',
    'mapQueries',
    function ($scope, mapQueries) {
        var self = this;

        var mapsQuery = mapQueries.latest10();

        mapsQuery.subscribe()
            .then(null, null, function (maps) {
                self.maps = maps;
            });

        $scope.$destroy(function () {
            mapsQuery.destroy();
        });

    }]);
