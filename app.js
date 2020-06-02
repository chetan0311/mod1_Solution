(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject=["$scope"];
function LunchCheckController ($scope) {
  $scope.itemString="";
  $scope.nofItems=0;
  $scope.resultString;
  $scope.resultOk=null;
  $scope.checkItems = function (){


      if($scope.itemString.length>0){
        var itemArray=$scope.itemString.split(",");
        console.log("Item Element: "+itemArray);

        $scope.resultString=checkItemCount(itemArray);
        $scope.resultOk=true;
      }else{

        $scope.resultString="please Enter Data First";
        $scope.resultOk=false;

      }
  };

}

  function checkItemCount(items){
    var itemCount =items.length;
    console.log("No. of Items Entered:"+itemCount);

    if(itemCount<4){
      return "Enjoy!";
    }else{
      return "Too much!";
    }
  }
}

)();
