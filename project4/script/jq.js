"use strict";

function Person(){
    
    var firstName,lastName, address;
    
    this.setFirstName= function(fname){
        
        firstName=fname;
        
    }
    this.setLastName= function(fname){
        
        lastName=fname;
        
    }
    this.setaddress= function(fname){
        
        address=fname;
        
    }
    
    this.getFirstName=function(){
        return firstName;
        
    }
     this.getLastName=function(){
        return lastName;
        
    }
      this.getaddress=function(){
        return address;
         
    }
}