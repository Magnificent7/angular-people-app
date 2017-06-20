(function() {
  "use strict";

  angular.module("app").controller("peopleCtrl", function($scope){  

    $scope.people = [
      { name: "Boris",
        bio: "Coder by day, vampire by night.",
        bioVisible: true
      },
      { name: "Nadine",
        bio: "Black medicine, son. Black medicine. Belie'd dat.",
        bioVisible: true
      },
      { name: "Anthony",
        bio: "T-shirts and burrito-loving dad.",
        bioVisible: false
      }
    ];

    $scope.toggleBioVisible = function(person) { 
      person.bioVisible = !person.bioVisible;
    };

    $scope.addNewPerson = function(name, bio){
      var newPerson = {
        name: name,
        bio: bio,
        bioVisible: true
      };
      $scope.people.push(newPerson);
      $scope.newPersonName = null;
      $scope.newPersonBio = null;
    };

    $scope.deletePerson = function(index){
      $scope.people.splice(index, 1);
    };

    window.$scope = $scope;

  });
}());











