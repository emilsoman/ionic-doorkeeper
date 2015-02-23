angular.module('starter.controllers', [])

.controller('SignupController', function($scope, UserFactory, $ionicPopup, $state) {
  $scope.submitSignup = function(email, password, password_confirmation) {
    UserFactory.signup(email, password, password_confirmation)
      .success(function(data){
        var alertPopup = $ionicPopup.alert({
          title: 'Okay!',
          template: 'Now try signing in'
        });
        alertPopup.then(function(res) {
          $state.go('dash');
        });
      })
      .error(function(err){
        if(err != undefined) {
          var alertPopup = $ionicPopup.alert({
            title: 'Error!',
            template: JSON.stringify(err)
          });
        }
      });
  }
})

.controller('LoginController', function($scope, UserFactory, $ionicPopup) {
  $scope.submitLogin = function(email, password) {
    UserFactory.login(email, password)
      .success(function(data){
        var alertPopup = $ionicPopup.alert({
          title: 'Signed in!',
          template: JSON.stringify(data)
        });
      })
      .error(function(err){
        if(err != undefined) {
          var alertPopup = $ionicPopup.alert({
            title: 'Error!',
            template: JSON.stringify(err)
          });
        }
      });
  }
});
