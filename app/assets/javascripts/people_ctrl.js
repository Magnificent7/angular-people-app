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
      $http.post('/api/v1/people.json', newPerson).then(function(response){
        console.log(response.data);
        $scope.people.push(response.data);
      }, function(error){
        console.log(error);
      });

      $scope.newPersonName = null;
      $scope.newPersonBio = null;
    };

    $scope.deletePerson = function(index){
      $scope.people.splice(index, 1);
    };

    window.$scope = $scope;

  });
}());











