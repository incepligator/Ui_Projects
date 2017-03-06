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



