(function () {
    'use strict';

    angular.module('pdProva')
        .service('PdService', PdService);

    function PdService($http, PdAlertService, PdStorageService) {
        return function (controller) {
            var self = this;

            self.controller = controller;

            self.entidade = {};
            self.provider = [];

            self.metodoSalvar = 'salvar';
            self.metodoExcluir = 'excluir';
            self.metodoPesquisar = 'pesquisar';

            self.salvar = salvar;
            self.excluir = excluir;
            self.limpar = limpar;
            self.pesquisar = pesquisar;

            function salvar() {

                var dataSource = PdStorageService.get('dataSource') || [];

                //deve ser pego sempre o id do ultimo pois algum registro no meio pode ser excluido
                self.entidade.id = dataSource[dataSource.length].id + 1;

                dataSource.push(self.entidade);
                PdStorageService.set('dataSource', dataSource);

                PdAlertService.showSuccess('Registro salvo com sucesso!');
            }

            function excluir() {

                var dataSource = PdStorageService.get('dataSource');
                dataSource.remover(self.entidade.id);
                PdStorageService.set('dataSource', dataSource);

                PdAlertService.showSuccess('Registro excluido com sucesso!');

                limpar();
            }

            function limpar() {
                self.entidade = {};
            }

            function pesquisar() {

            }
        };
    }
})();