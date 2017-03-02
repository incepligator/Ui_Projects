"use strict";

var human= new human();

var form=[];



console.log(".........................................................");





var data;
function readData(datat){
    
    data=(document.getElementById(datat).value);
    
    
   return data;
    
    
    
}



   

function importData(){
    
   
    
    
    human.hname(readData("fname"));
    human.hlast(readData("flast"));
    human.dob(readData("dob"));
    human.dobc(readData("country"));
    
    
    
    human.saddress(readData("adds"));
    human.aaddress(readData("adda"));
    human.caddress(readData("addc"));
    human.zaddress(readData("addz"));
    human.mobile(readData("mobile"));
    human.work(readData("work"));
    human.home(readData("home"));
    human.emailc(readData("emaila"));
    human.drive(readData("drive"));
    human.dstate(readData("dstate"));
    human.gen(genderi());
    
    
    

    
    //document.getElementById("tname").innerHTML="The given string is palindrome";
    
}

function genderi(){
    var   genval=document.getElementsByName("gender");
    for( let i=0 ;i<genval.length;i++){
        if(genval[i].checked){
            return genval[i].value;
        }
    }
}

function formsubmit(){
    
    event.preventDefault();
    importData();
    
    form.push(human.Fullname(),human.DOB(),human.genderp(),human.fAddress(),human.contactA(),human.emailg(),human.dno());
    
    console.log(human.emailg());
    console.log(human.dno());
    console.log(human.genderp());
    console.log(form[4]);
    
    console.log(form);
    tableUpdate();
    
   console.log(human.DOB());
    
    console.log(form);
    
    
}


function tableUpdate() {
    
    
    var table = document.getElementById("sampleTable");
    
 //   var row= document.createElement("tr");
    
    var row = table.insertRow();
  
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
   
// Add some text to the new cells:
    cell1.innerHTML = form[0];
    cell2.innerHTML = form[1];
    cell3.innerHTML = form[2];
    cell4.innerHTML = form[3];
    cell5.innerHTML = form[4];
    cell6.innerHTML = form[5];
    cell7.innerHTML = form[6];
    
    
    while(form.length > 0) {
    form.pop();
}
  
    
    
}