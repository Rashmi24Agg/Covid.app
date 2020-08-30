const URL = "https://covid19.mathdro.id/api" ;
const url2 = "https://covid19.mathdro.id/api/countries" ;
let app = angular.module('MyApp', [] ) ;
app.controller( 'MyCtrl' , ( $scope,$http ) => {
      // this is controller
      $scope.title = "Stay Home , Stay Safe" ;
      console.log("App Loaded");
      $http.get(URL).then(
        (response) => {
        //if call is successful
        console.log(response.data);
          $scope.allData = response.data ;
      },
      (error) => {
        console.log(error);
      }
    ) ;
    // get country
    $scope.getCountry = () => {
      console.log( $scope.country );
      let c = $scope.country ;
      if(c == ""){
        $scope.cData = undefined ;
        return ;
      }
      $http.get('${url2}/${c}').then(
        (response) => {
          console.log(response.data) ;
          $scope.cData = response.data ;
        } ,
        (error) => {
          console.log(error);
        }
      );
    };
  }
) ;
