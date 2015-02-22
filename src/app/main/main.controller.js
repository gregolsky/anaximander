(function () {
    'use strict';

angular.module('anaximander')
.controller('MainCtrl', [ '$scope', 'mapQueries', MainCtrl ]);

    function MainCtrl($scope, mapQueries) {
        var self = this;

        var mapsQuery = mapQueries.latest10();

        mapsQuery.subscribe()
        .then(null, null, function (maps) {
            self.maps = maps;
        });

        $scope.$on('$destroy', function () {
            mapsQuery.destroy();
        });
    }
})();
