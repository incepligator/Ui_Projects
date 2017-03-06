(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function Calculator(){
    
    
    var num1,num2;
    var _this=this;
    
    
    this.setNum1=(x)=>num1 =x;
    this.setNum2=(x)=>num2 =x;
    
    
    this.getNum1=()=>num1;
    this.getNum2=()=>num2;
    
    
    this.add=()=> num1+num2;
    this.sub=()=> num1-num2;
    this.pro=()=> num1*num2;
    this.div=()=> num1/num2;
    
    
    this.testOutput= ()=>{
        
        console.log("Num 1= "+this.getNum1());
         console.log("Num 2= "+this.getNum2());
        
        console.log("Num 1= "+_this.getNum1());
         console.log("Num 2= "+_this.getNum2());
        
        console.log("add = "+this.add());
        console.log("sub = "+this.sub());
        console.log("pro = "+this.pro());
        console.log("div = "+this.div());
    }
    
}

function water(){
    
    
    
}



//link another js 
module.exports=Calculator;




},{}],2:[function(require,module,exports){
"use strict";


//link with calculator js 

var Calculator=require('./calculator.js');



var tempObj= new Calculator();
tempObj.setNum1(5);
tempObj.setNum2(6);

tempObj.testOutput();
},{"./calculator.js":1}]},{},[2]);
