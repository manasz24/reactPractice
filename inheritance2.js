// Create custom object using inline object creation syntax

var emp3={
    "empId":333,
    "empName":"Sidhhant",
    empSal:3000.0,
   dispEmpInfo:function()
       {
           return " EMPID : "+this.empId+ " Name : "+
           this.empName + " Salary  : "+ this.empSal
       },
     calcEmpAnnualSal:function()
       {
           return ((this.empSal)*12);
       }
   }
   //------------------
   console.log(" 3 Emp Info : "+ emp3.dispEmpInfo());
   console.log("  3  emp Annual Sal : "+ emp3.calcEmpAnnualSal());
   
   //-----------------------------
   var emp33={
   
       "ratePerHr":500,
       "noOfHrs":3,
       "dispWageEmpInfo":function()
       {
           return  this.dispEmpInfo()+
           " Rate per hours : "+this.ratePerHr+ " No Of Hours : "+
           this.noOfHrs ;
       },
       calcWageEmpAnnualSal:function()
       {
               return(this.calcEmpAnnualSal()+
           (this.ratePerHr*this.noOfHrs*20))
       }
   
   }
   emp33.__proto__=emp3;
   console.log("sidhhat Wage  Emp Info : "+ emp33.dispWageEmpInfo());
   console.log(" sif=dhhat   Wage emp Annual Sal : "+ emp33.calcWageEmpAnnualSal());
   
   