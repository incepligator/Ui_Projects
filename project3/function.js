"use strict";

function Calculator(){
    
    var num1=0;
    var num2=0;
   this.num3=12;
    
    
    //setter method 
    this.setNum1=function(pNum1){
        
        num1=parseInt(pNum1);
 //       this.num1=12;
        console.log(this.num1);
        console.log(num1);
    }
    
    
      this.setNum2=function(pNum2){
        num2=parseInt(pNum2);        
    }
    
    // getter method 
      this.getNum1=function(){
          
          return num1;
          
      }
     
       this.getNum2=function(){
          
          return num2;
          
      }
      
      this.add=function(){
          
          return num1+num2;
          
      }
      this.sub=function(){
          
          return num1-num2;
          
      }
      this.multiply=function(){
          
          return num1*num2;
          
      }
        this.divide=function(){
          
          return num1/num2;
          
      }
        
        this.random=function(){
        var r="water"; 
         var w="world";    
       
         return r;
            
      }
      
    console.log(this.num3);
    
    
}



var calc = new Calculator();
//console.log(calc.num3);
 console.log("........................................................");
/*
calc.setNum1(2);

calc.setNum2(44);
*/

//Calculator();

/*console.log(calc.getNum1());
console.log(calc.getNum2());
console.log(calc.add());
console.log(calc.sub());
console.log(calc.multiply());
console.log(calc.divide());*/

//var y= new calc.random();

/*console.log(calc.random());*/


var num1;
var num2;


function importData(){
    num1=document.getElementById("num1").value;
    num2=document.getElementById("num2").value;
    
    calc.setNum1(num1);
    calc.setNum2(num2);
    
    console.log(num1);
    console.log(num2);
}

function add(){
    event.preventDefault();
    importData();
   document.getElementById("results").innerHTML="thesum is "+calc.add();
   console.log(calc.add());
 }
function sub(){
    event.preventDefault();
    importData();
   document.getElementById("results").innerHTML="thesum is "+calc.sub();
   console.log(calc.add());
 }
function mul(){
    event.preventDefault();
    importData();
   document.getElementById("results").innerHTML="thesum is "+calc.multiply();
   console.log(calc.add());
 }
function div(){
    event.preventDefault();
    importData();
   document.getElementById("results").innerHTML="thesum is "+calc.divide();
   console.log(calc.add());
 }


function add1(wat){
    event.preventDefault();
    importData();
    var text="";
    switch(wat){
            
        case 1:
            
        console.log(wat);
           text=calc.add();
            break;
        case 2:
            
            console.log(wat);
            text=calc.sub();
            break;
        case 3:
            
            console.log(wat);
            text=calc.multiply();
            break;
        case 4:
            
            console.log(wat);
            text=calc.divide();
            break;
            
    }
    document.getElementById("results").innerHTML="thesum is "+text;
 }

