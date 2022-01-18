//----JS custom object creation using object "Object"

var emp4=new Object();
emp4.empId=444;
emp4.empName="Manali";
emp4["empSal"]=4000.0;
emp4.dispEmpInfo=function()
{
    return " EMPID : "+this.empId+ " Name : "+
    this.empName + " Salary  : "+ this.empSal
};
emp4.calcEmpAnnualSal=function()
{
    return ((this.empSal)*12);
}

//---------------------
console.log(" 4 Emp Info : "+ emp4.dispEmpInfo());
console.log("  4  emp Annual Sal : "+ emp4.calcEmpAnnualSal());

//---------------------
var emp44= Object.create(emp4)
emp44["ratePerHr"]=500;
emp44["noOfHrs"]=2;
emp44["dispWageEmpInfo"]=function()
    {
        return  this.dispEmpInfo()+
        " Rate per hours : "+this.ratePerHr+ " No Of Hours : "+
        this.noOfHrs ;
    };
 emp44["calcWageEmpAnnualSal"]=function()
    {
            return(this.calcEmpAnnualSal()+
        (this.ratePerHr*this.noOfHrs*20))
    };

    console.log("manali Wage  Emp Info : "+ emp44.dispWageEmpInfo());
console.log(" manali  Wage emp Annual Sal : "+ emp44.calcWageEmpAnnualSal());



   
