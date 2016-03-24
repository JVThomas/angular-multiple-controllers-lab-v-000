function ContactController(){
  var vm = this;
  vm.name = "Bill Gates";
  vm.email = "bill@microsoft.com";
  vm.phone = "asdsfdsfsdfsdfs";

  vm.changeName = function(){
    vm.name = "Illuminati";
  }
}

angular
  .module('app')
  .controller('ContactController',ContactController);