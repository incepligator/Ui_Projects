"use strict";

angular.module("app").controller("appCtrl",
                     
                                 ["$scope",function($scope){
    
    $scope.formModel={
    
    name:"Shrawan Shrestha",
    address:"Peepalbot",
    company:"Variety",
    salary:"100000"
    }
    
    $scope.display=function(){
        
        event.preventDefault();
        console.log($scope.formModel.name);
        
        
        
   
        
      
   var a= `<div class="row">
        <div class="col-md-2"><strong>First Name</strong></div>
        <div class="col-md-2"><strong>Last Name</strong></div>
        <div class="col-md-2"><strong>Address </strong></div>
    </div>`;
        
    }
    
    
                                  }]);