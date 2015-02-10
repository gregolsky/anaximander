(function () {

angular.module('anaximander')
.controller('CreateMapCtrl', [ '$state', 'firebaseUtil', CreateMapCtrl ]);

function CreateMapCtrl($state, firebaseUtil) {
    var self = this;

    self.data = {};
    self.submit = submit;
    self.cancel = cancel;

    function submit(data) {
        data.createdAt = new Date().getTime();
        firebaseUtil.ref('/maps').push(data);
        $state.go('home');
    }

    function cancel() {
        $state.go('home');
    }


}

})();
