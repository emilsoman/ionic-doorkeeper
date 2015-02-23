angular.module('starter.services', [])

.factory('UserFactory', function($http) {
  var apiEndpoint = 'http://localhost:3000'

  return {
    signup: function(email, password, password_confirmation) {
      return $http.post(apiEndpoint + '/users', {
        user: {
          email: email,
          password: password,
          password_confirmation: password_confirmation
        }
      });
    },
    login: function(email, password) {
      return $http.post(apiEndpoint + '/oauth/token', {
        username: email,
        password: password,
        grant_type: 'password'
      });
    }
  }
});
