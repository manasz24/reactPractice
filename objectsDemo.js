// using constructor Function

function Employee(eid,enm,esal){
this.empid = eid;
this.empName = enm;
this.empSal = esal;
this.employeeInfo= function(){
    return "EMPID : " + this.empid + "Name :" + this.empName + "Salary :" +this.empSal;
}
this.calcEmpAnnualSal=function()
    {
        return ((this.empSal)*12);
    }
}
var emp1=new Employee(111,"vaishaliS",1000.0);
var emp2=new Employee(222,"samir",2000.0);
console.log(emp1.calcEmpAnnualSal());
console.log(emp2.employeeInfo());

// Create custom object using inline object creation syntax

var emp3={
    empId:333,
    empName:"Sidhhant",
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


// JS custom Object creation using Object "Object"

var emp4 = new Object();
emp4.empName ='Manas';
emp4.empId='4444444';
emp4["empSal"]=4000.0;
emp4.employeeInfo= function(){
    return "EMPID : " + this.empid + "Name :" + this.empName + "Salary :" +this.empSal;
};
emp4.calcEmpAnnualSal=function()
{
    return ((this.empSal)*12);
};

console.log('emp4 information',emp4.employeeInfo());

