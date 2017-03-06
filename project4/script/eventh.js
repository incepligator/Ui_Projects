"use strict";


$(document).ready(function(){
    console.log("form Event Handlers");
    
});

var setArray= [];


var obj1= new Person();

obj1.setFirstName("George");
obj1.setLastName("Harrison");
obj1.setaddress("123 peepalbot");


var obj2= new Person();

obj2.setFirstName("jim Hendrix");
obj2.setLastName("Shrestha ");
obj2.setaddress(" new york");

var obj3= new Person();

obj3.setFirstName("Bush W Bush");
obj3.setLastName("James ");
obj3.setaddress("Dallas");

setArray.push(obj1);
setArray.push(obj2);
setArray.push(obj3);



console.log(setArray.length);

$(document).ready(function(){
    
   render();
    
});
    
/*    $("#submit").on("click".function(){
                    
                    alert("hello world");
                    });

     $("#submit").click.function(){
                    
                    alert("next hello  world");
                    });
    
    
};*/
                  
                 

function render(){
    
    var resultBody=

                    `
                    <div class="row">
                
                    <div class="col-md-2">First Name</div> 
                    <div class="col-md-2">Last name</div> 
                    <div class="col-md-2">Address</div>
                    </div>`;
    
    
                    setArray.forEach(function(obj){
                                                    resultBody +=`
                                                                    <div class='row'>
                                                                    <div class='col-md-2'>`+
                                                                                            obj.getFirstName()+`
                
                                                                    </div>
            
                                                                    <div class='col-md-2'>`+
                                                                                            obj.getLastName()+`
                
                                                                    </div>
            
                                                                    <div class='col-md-2'>`+
                                                                                            obj.getaddress()+`
                
                                                            </div>
            
                                                            </div> `;
         
            });
   $("#results").html(resultBody);
    
}
    

    
    
    
  //  0   console.log(resultBody);
       //     console.log($("#results").html();
        
        
  //      console.log(obj.getFirstName());
    




/*sample.forEach(function(val){
    
    console.log(val);
})*/


/*function grabValues(){
    
    render();
    
    var FirstName=$("#fname").val();
    var LastName=$("#lname").val();
    
    var Address=$("#address").val();
    
    var obj= new Person();
    
    var obj.setFirstName(FirstName);
    var obj.setLastName(LastName);
    var obj.setaddress(Address);
}*/





  
                        
                  
  