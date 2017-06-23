(function() {
  "use strict";

  angular.module("app").controller("peopleCtrl", function($scope, $http){  
    $scope.setup = function() {
      $http.get("/api/v1/people").then(function(response){
        $scope.people = response.data;
      });
    };

    $scope.toggleBioVisible = function(person) { 
      person.bioVisible = !person.bioVisible;
    };

    $scope.addNewPerson = function(name, bio){
      var newPerson = {
        name: name,
        bio: bio,
        bioVisible: true
      };
      $http.post("/api/v1/people.json", newPerson).then(function(response){
        console.log(response.data);
        $scope.people.push(response.data);
      }, function(error) {
        console.log(error);
        $scope.errors = error.data.errors;
      });
      $scope.newPersonName = null;
      $scope.newPersonBio = null;
    };

    $scope.deletePerson = function(person){
      $http.delete('/api/v1/people/'+person.id).then(function(response){
        console.log(response);
        var index = $scope.people.indexOf(person);
        $scope.people.splice(index, 1);
      });
    };

    $scope.toggleOrder = function(attribute){
      if(attribute != $scope.orderAttribute) {
        $scope.descending = false;
      } else {
        $scope.descending = !$scope.descending;
      }
      $scope.orderAttribute = attribute;
    };

    $scope.getSortIcon = function(attribute) {
      if(attribute == $scope.orderAttribute) {
        // if($scope.descending) {
        //   return '\u2193';
        // }
        // else {
        //   return '\u2191';
        // }
        return $scope.descending ? '\u2193' : '\u2191';
      }
      else {
        return '';
      }
    };

    window.$scope = $scope;

  });
}());











