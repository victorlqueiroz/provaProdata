(function () {
    'use strict';

    angular
        .module('pdProva')
        .controller('CadastroEstadoController', CadastroEstadoController);

    function CadastroEstadoController(EstadoService) {
        var vm = this;
        vm.pdCrudService = EstadoService.getPdService();
    }

})();

