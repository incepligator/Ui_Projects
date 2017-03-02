"use strict";


window.alert("For 18+ or older only  ");

function reverse(){
    
    var a=document.getElementById("palin").value;
    var b= a.split('');
    
    console.log(a);
    
    b=b.reverse().join('');
    
    if(a==b){
  //      console.log("palindrome");
       document.getElementById("water").innerHTML="The given string is palindrome";
}
    else {
 //      console.log("not palindrome");
        document.getElementById("water").innerHTML="The given string is not palindrome";
        }
}

var x=[];
function add(){
    
    x.push(document.getElementById("add").value);
    document.getElementById("dadd").innerHTML=x;
    
}

function sortt(){
    
    myFunction();
    
}

function myFunction() {
    x.sort(function(a, b){return a-b});
    document.getElementById("dadd").innerHTML = x;
    
    
}
