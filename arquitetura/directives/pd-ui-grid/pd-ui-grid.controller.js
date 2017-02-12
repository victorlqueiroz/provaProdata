angular.module('pdProva')
    .controller('GridCtrl', GridCtrl);

function GridCtrl() {
    var vm = this;

    vm.gridOptions = {
        columnDefs: vm.options.columnDefs
    };
}