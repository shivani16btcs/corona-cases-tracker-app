//const Url = "https://covid19.mathdro.id/api";
//const Url="https://healthcare.googleapis.com/$discovery/rest?version=v1";
const Url="https://mybusiness.googleapis.com/v4/accounts/docterreview/locations/1047892681669/reviews"
let app = angular.module("MyApp", []);

app.controller("MyCtrl", ($scope, $http) => {
  //this is controller
  $scope.title = "DOCTOR reviews ";
  $http.get(Url).then(
    (response) => {
        console.log(response.data)
        $scope.alldata=JSON.stringify(response.data);

    },
    (error) => {
        console.log(error);
    }
  );
 });
