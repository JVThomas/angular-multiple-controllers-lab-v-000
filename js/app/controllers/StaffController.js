function StaffController(){
  this.name = 'Steve Jobs';
  this.email = 'steve@apple.com';
  this.phone = "skdjkdsjfksdjfkjsk";
}

angular
  .module('app')
  .controller('StaffController', StaffController);