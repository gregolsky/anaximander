(function () {

angular.module('anaximander')
.controller('CreateMapCtrl', [ '$state', 'mapFactory', 'mapRepository', CreateMapCtrl ]);

function CreateMapCtrl($state, mapFactory, mapRepository) {
    var self = this;

    self.data = {};
    self.submit = submit;
    self.cancel = cancel;

    function submit(data) {
        data.createdAt = new Date().getTime();
        var map = mapFactory.create(data);
        mapRepository.save(map);
        $state.go('home');
    }

    function cancel() {
        $state.go('home');
    }


}

})();
