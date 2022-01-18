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
