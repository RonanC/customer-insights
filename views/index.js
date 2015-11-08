// controller module with scope and http components
// http component will consume the REST service at /greeting
// if succesful the json data returned will be assigned to the data variable
// $scope.greeting is a model object (we can bind this to the html)


// function GetInfo($scope, $http) {
//     $http.get('http://localhost:8080/').
//         success(function(data) {
//             $scope.diamond = data;
//         });
// }

var myApp = angular.module('myApp',[]);

myApp.controller('InfoController', ['$scope', '$http', function($scope, $http) {
    var data = {};
    // Simple GET request example:
    $scope.find = function(id){
      console.log("find");

      data.cool = $http({
        method: 'GET',
        url: 'http://localhost:5000/datathon/customer/' + id
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          data.user = response.data;
          //alert(JSON.stringify("success: " + response));
          console.log("success" + JSON.stringify(response));
        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          //alert(JSON.stringify("error: " + response));
          console.log("error" + JSON.stringify(response));
          $scope.user = response.data;

          $scope.id = response.data._id;
          $scope.balance = response.data.balance;
          $scope.status = response.data.status;
          $scope.income = response.data.income;
          $scope.payday = response.data.payday;
          $scope.age = response.data.age;

          $scope.sex = response.data.sex;
          $scope.county = response.data.county;
          $scope.rent_transactions = response.data.rent_transactions;
          $scope.transactions = response.data.transactions;
        });
      };

      return data;
// }

}]);
