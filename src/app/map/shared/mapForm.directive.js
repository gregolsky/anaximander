(function () {
    angular.module('anaximander')
        .directive('mapForm', mapForm);

    function mapForm() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/map/shared/mapForm.html',
            scope: {
                onSubmit: '&',
                onCancel: '&',
                editables: '=',
                data: '='
            },
            link: function ($scope, attrs, element) {

                $scope.model = {};

                $scope.cancel = cancel;
                $scope.submit = submit;

                $scope.$watch('data', function (newVal) {
                    $scope.model = newVal ? prepareModel(newVal) : {};
                });

                function submit() {
                    $scope.onSubmit({ data: $scope.model });
                }

                function cancel() {
                    $scope.onCancel();
                }

                function prepareModel(data) {
                    return {
                        name: data.name,
                        imageUrl: data.imageUrl,
                        description: data.description
                    };
                }

            }
        };

        return directive;
    }

})();
