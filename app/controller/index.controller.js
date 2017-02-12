(function () {
    'use strict';

    angular.module('pdProva')
        .controller('IndexController', IndexController);

    function IndexController() {
        var vm = this;
        vm.entidade = {};
    }

})();