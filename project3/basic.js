"use strict";

//variable declaration

var x=12;
var y="wateworld 2";

//creating arrays empty arrays 

var xarray =[];

var yarray = new Array();

console.log(x);
console.log(y);

var animals= ["cat",'dog','bat'];

//checking datatypes of the variables declared 
console.log(typeof(x));
console.log(typeof(y));
console.log(typeof(xarray));
console.log(typeof(yarray));
console.log(typeof(animals));

//playing with arrays 

console.log(animals[1]);

console.log(xarray[0]);


//pushing elements to an array
animals.push('donkey');
xarray.push('potato');
xarray.push('eggs');
xarray.push('ice cream');
xarray.push('sundae');

xarray.pop();

console.log(xarray);


var arrayLength=animals.length;


for (let j=0; j<arrayLength; j++)
{
   console.log('array print animal '+animals[j]) ;
    
    
}






function iterateArray(arrayVal)
{
    
 for (let j=0; j<arrayVal.length; j++)
{
   console.log(arrayVal[j]) ;
    
    
}   
}

animals.reverse();

iterateArray(xarray);
    
    
console.log(animals.indexOf('dog'));



//animals[3]="donkey";

console.log(animals[3]);
//checking length array
console.log(animals.length);



//reversing an string 

var sample='root';
console.log(sample[3]);


var samplearray= sample.split('');
samplearray.reverse();
sample=samplearray.join('');


console.log('reverse string is '+sample);


console.log(reverseString("waterworld"));

function reverseString(val){
    
    val reverseVal='';
    for(let x=val.length-1; x>0; x--)
        {
            reverseVal+=val[x];// reverseval= reverseval +val[x]
        }
}



var sampleNum=2;

console.log("testing pre/post increment");
console.log(sampleNum);
console.log(sampleNum++);
console.log(sampleNum);
console.log(++sampleNum);
console.log(sampleNum);
