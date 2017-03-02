"use strict";

function human(){
    
    var Name;
    var Last;
    
    var DOB;
    var DOBC;
    
    var gender;
    
    
    var sAddress;
    var aAddress;
    var cAddress;
    var zAddress;
    
    var mobile;
    var work;
    var home;
    
    var emaili;
    var dnum;
    var dstate;
    
    
    
       this.gen=function(Pname){
        
        gender=Pname; 
    
}
    this.hname=function(Pname){
        
        Name=Pname; 
    
}
    this.hlast=function(Plast){
        
        Last=Plast; 
    
    
    this.dob=function(Plast){
        
        DOB=Plast; 
        
    
}
       this.dobc=function(Plast){
        
        DOBC=Plast; 
        
    
}
        this.saddress=function(Plast){
        
        sAddress=Plast; 
        
    
}
        
         this.aaddress=function(Plast){
        
        aAddress=Plast; 
        
    
}
         
          this.caddress=function(Plast){
        
        cAddress=Plast; 
        
    
}
           this.zaddress=function(Plast){
        
        zAddress=Plast; 
        
    
}
            this.drive=function(Plast){
        
        dnum=Plast; 
        
    
}
               this.emailc=function(Plast){
        
        emaili=Plast; 
        
    
}
               this.drive=function(Plast){
        
        dnum=Plast; 
        
    
}
             this.dstate=function(Plast){
        
        dstate=Plast; 
        
    
}
             
                 this.mobile=function(Plast){
        
        mobile=Plast; 
        
    
}
                 
                     this.work=function(Plast){
        
        work=Plast; 
        
    
}
                         this.home=function(Plast){
        
        home=Plast; 
        
    
}
    
    this.Fullname=function(){
        
        return Name+" "+Last;
        
    }
    
      this.DOB=function(){
        
        return DOB+" "+DOBC;
        
    }
      
      
      
     this.fAddress=function(){
        
        return sAddress+" "+aAddress+" "+cAddress+" "+zAddress;
        
    }
    
        this.contactA=function(){
        
        return mobile+" "+work+" "+home;
        
    }
        
   this.emailg=function(){
        
        return emaili;
        
    }
   
     this.dno=function(){
        
        return dnum+" "+dstate;
        
    }
     
       this.genderp=function(){
        
        return gender;
        
    }
  
  
}
}