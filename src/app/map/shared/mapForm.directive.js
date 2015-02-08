(function () {
    angular.module('anaximander')
        .directive('mapForm', mapForm);

    function mapForm() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/map/shared/mapForm.html',
            scope: {
                submitAction: '&',
                cancelAction: '&',
                editables: '=',
                data: '='
            },
            link: function ($scope, attrs, element) {

                $scope.model = {};

                $scope.onCancel = onCancel;
                $scope.onSubmit = onSubmit;

                $scope.$watch('data', function (newVal) {
                    $scope.model = prepareModel(newVal);
                });

                function onSubmit() {
                    $scope.submitAction($scope.model);
                }

                function onCancel() {
                    $scope.cancelAction();
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
