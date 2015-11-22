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

//var bankingUrl = "localhost:5000/";
var bankingUrl = 'http://178.62.9.141:5000/';

var myApp = angular.module('myApp',[]);

myApp.controller('InfoController', ['$scope', '$http', '$window', function($scope, $http, $window) {
    var user = {};

    // post stuff
    $scope.date = new Date();

    $scope.postReRow = false;
    $scope.togglePostRent = function(){
      $scope.postReRow = !$scope.postReRow;
    };

    $scope.postTrRow = false;
    $scope.togglePostTrans = function(){
      $scope.postTrRow = !$scope.postTrRow;
    };


    // newRent
    $scope.newRent = function(id, ammount){
      $scope.postRent(id, ammount);
      $scope.togglePostRent();
      // $scope.find(id);
    };

    // post a new rent (POST)
    $scope.postRent = function(id, ammount){
      $http({
        method: 'POST',
        url: bankingUrl + 'datathon/customer/add/rent/' + id,
        data: {
          "ammount": ammount
        }
      }).then(function successCallback(response) {
          console.log("success" + JSON.stringify(response));
          // $scope.user = response.data;
          $scope.find(id);
          //alert(JSON.stringify("success: " + response));
        }, function errorCallback(response) {
          console.log("error" + JSON.stringify(response));
          //alert(JSON.stringify("error: " + response));
          $window.alert("Error: " + response.data.error + "\nStatus: " + response.status + "\nConfig: " + JSON.stringify(response.config));
        });
      };

      // newRent
      $scope.newTrans = function(id, category, subcategory, ammount, type){
        $scope.togglePostTrans();
        $scope.postTrans(id, category, subcategory, ammount, type);
        // $scope.find(id);
      };

    $scope.checkTrans = function(id, category, subcategory, ammount, type){
      if (transForm.$valid) {
        $scope.postTrans(id, category, subcategory, ammount, type);
      }else{
        console.log("invalid form");
      }

    };

    // post a new transaction (POST)
    $scope.postTrans = function(id, category, subcategory, ammount, type){
      $http({
        method: 'POST',
        url: bankingUrl + 'datathon/customer/add/transaction/' + id,
        data: {

          "category": category,
          "subcategory": subcategory,
          "ammount": ammount,
          "type": type
        }
      }).then(function successCallback(response) {
          console.log("success" + JSON.stringify(response));
          // $scope.user = response.data;
          $scope.find(id);
          //alert(JSON.stringify("success: " + response));
        }, function errorCallback(response) {
          console.log("error" + JSON.stringify(response));
          //alert(JSON.stringify("error: " + response));
          $window.alert("Error: " + response.data.error + "\nStatus: " + response.status + "\nConfig: " + JSON.stringify(response.config));
        });
      };

    // EDIT
    // edit user information
    $scope.editMode = false;

    $scope.editUser = function(){
      $scope.editMode = !$scope.editMode;

      if ($scope.editMode === true) {
          $scope.prevCounty = $scope.county;
          $scope.prevPayday = $scope.payday;
      }
    };

    $scope.saveEdits = function(id, payday, county){
      // $window.alert("id: " + id + "\npayday: " + payday + "\ncounty: " + county);

      // UNCOMMENT ONCE BACKEND SET UP
      $scope.updateUser(id, payday, county.toUpperCase());

      $scope.editMode = false;
    };

    $scope.cancelEdits = function(){
      $scope.county = $scope.prevCounty;
      $scope.payday = $scope.prevPayday;
      $scope.editMode = false;
    };

    // put user information [payday, county] (PUT)
    $scope.updateUser = function(id, payday, county){
      $http({
        method: 'PUT',
        url: bankingUrl + 'datathon/customer/' + id,
        data: {
          "payday": payday,
          "county": county
        }
      }).then(function successCallback(response) {
          console.log("success" + JSON.stringify(response));
          // $scope.user = response.data;

          // get fresh user info
          $scope.find(id);
          //alert(JSON.stringify("success: " + response));
        }, function errorCallback(response) {
          console.log("error" + JSON.stringify(response));
          //alert(JSON.stringify("error: " + response));

          // if error then roll back edits
          $scope.cancelEdits();
          $window.alert("Error: " + response.data.error + "\nStatus: " + response.status + "\nConfig: " + JSON.stringify(response.config));
        });
      };

    // deactivate user account (DELETE)
    $scope.deacUser = function(id){
      // MOCK INFO, COMMENT OUT ONCE BACK END HOOKED UP
      // if ($scope.status == "closed") {
      //   $scope.status = "open";
      //   $scope.btnActivate = "Deactivate Account";
      //   // $scope.panelCol = "panel panel-primary";
      // }
      // else if ($scope.status == "open") {
      //   $scope.status = "closed";
      //   $scope.btnActivate = "Activate Account";
      //   // $scope.panelCol = "panel panel-danger";
      // }
      // else{
      //   $scope.status = "unknown";
      //   $scope.btnActivate = "Activate Account";
      //   // $scope.panelCol = "panel panel-warning";
      // }

      // ACTIVATE ONCE BACKEND HOOKED UP
      $scope.toggleStatus(id);
    };

    $scope.toggleStatus = function(id){
      $http({
        method: 'PUT',
        url: bankingUrl + 'datathon/customer/togglestatus/' + id
      }).then(function successCallback(response) {
          console.log("success" + JSON.stringify(response));
          // $scope.user = response.data;
          //alert(JSON.stringify("success: " + response));

          // get the data again
          $scope.find(id);

        }, function errorCallback(response) {
          console.log("error" + JSON.stringify(response));
          //alert(JSON.stringify("error: " + response));
          $window.alert("Error: " + response.data.error + "\nStatus: " + response.status + "\nConfig: " + JSON.stringify(response.config));
        });
      };

    // Get user data by id (GET)
    $scope.find = function(id){
      $http({
        method: 'GET',
        url: bankingUrl + 'datathon/customer/' + id
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          $scope.user = response.data;

          $scope.id = response.data._id;
          $scope.balance = response.data.balance;

          if(response.data.status){
            $scope.status = "open";
          }
          else{
            $scope.status = "closed";
          }
          // $scope.status = response.data.status;

          $scope.income = response.data.income;
          $scope.payday = response.data.payday;
          $scope.age = response.data.age;

          $scope.sex = response.data.sex;
          $scope.county = response.data.county;
          $scope.rent_transactions = response.data.rent_transactions;
          $scope.transactions = response.data.transactions;
          //alert(JSON.stringify("success: " + response));
          //console.log("success" + JSON.stringify(response));

          if ($scope.status == "open") {
            $scope.btnActivate = "Deactivate Account";
          } else if ($scope.status == "closed") {
            $scope.btnActivate = "Activate Account";
          } else{
            $scope.status = "unknown";
            $scope.btnActivate = "Activate Account";
          }

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          //alert(JSON.stringify("error: " + response));
          console.log("error" + JSON.stringify(response));
          $window.alert("Error: " + response.data.error + "\nStatus: " + response.status + "\nConfig: " + JSON.stringify(response.config));

          //$scope.user = response.data;

        });
      };

      // rent sort
      $scope.rPredicate = 'rent_date';
      $scope.rReverse = true;
      $scope.rOrder = function(rPredicate) {
        $scope.rReverse = ($scope.rPredicate === rPredicate) ? !$scope.rReverse : false;
        $scope.rPredicate = rPredicate;
      };

      // transactions sort
      $scope.tPredicate = 'date';
      $scope.tReverse = true;
      $scope.tOrder = function(tPredicate) {
        $scope.tReverse = ($scope.tPredicate === tPredicate) ? !$scope.tReverse : false;
        $scope.tPredicate = tPredicate;
      };

      return user;
}]);
