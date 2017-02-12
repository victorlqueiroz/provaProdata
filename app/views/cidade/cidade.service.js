(function () {
    'use strict';

    angular.module('pdProva')
        .service('CidadeService', CidadeService);

    function CidadeService(PdService) {
        this.getPdService = getPdService;

        function getPdService() {
            var ps = new PdService('cidadeController');
            return ps;
        }
    }
})();