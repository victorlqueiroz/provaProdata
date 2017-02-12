(function () {
    'use strict';
    
    angular.module('pdProva')
        .directive('pdInputDate', pdInputDate);
    
    function pdInputDate() {
        return {
            restrict: 'E',
            require: '^form',
            templateUrl: 'arquitetura/directives/pd-input-date/pd-input-date.html',
            scope: {
                label: '@',
                ngModel: '=',
                ngRequired: '=',
                colspan: '@',
                formato: '@'
            },
            link: link
        };

        function link($scope, element, attrs, formCtrl) {
            $scope.formCtrl = formCtrl;
            $scope.classColspan = 'col-md-' + ($scope.colspan || 3);
            $scope.inputName = 'pdInputDate' + $scope.$id;
        }
    }
})();