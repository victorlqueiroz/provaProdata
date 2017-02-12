(function () {
    'use strict';

    angular.module('pdProva')
        .directive('PdUiGrid', PdUiGrid);

    function PdUiGrid() {
        return {
            templateUrl: 'arquitetura/directives/pd-ui-grid/pd-ui-grid.html',
            controller: 'GridCtrl',
            controllerAs: 'grid',
            restrict: 'E',
            scope: {
                options: '='
            },
            bindToController: true
        };
    }
})();