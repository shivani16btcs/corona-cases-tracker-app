const Url = "https://covid19.mathdro.id/api";
let app = angular.module("MyApp", []);

app.controller("MyCtrl", ($scope, $http) => {
  //this is controller
  $scope.title = "stay home stay safe ";
  $http.get(Url).then(
    (response) => {
        console.log(response.data)
        $scope.alldata=response.data;

    },
    (error) => {
        console.log(error);
    }
  );

  $scope.get_c_data=async()=>{
      let country=$scope.c;
      if(country==' '){
          $scope.c_data=undefined;
          return
      }
      await $http.get(`${Url}/countries/`).then(
          (response)=>{
              $scope.c_data=response.data.countries;
              console.log($scope.c_data);
          },
          (error)=>{
              console.log(error);
          }
      )
  }


  $scope.detail=async()=>{

   await   console.log("hello");
    
  }
  
});



$(function() {
    $('#table').bootstrapTable()
  })

