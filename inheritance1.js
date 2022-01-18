//------------------------Inheritance using prototype----------
// Custom Object creation  using constructor function

function Employee(eid,enm,esal)
{
    this.empId=eid;
    this.empName=enm;
    this.empSal=esal;
    this.dispEmpInfo=function()
    {
        return " EMPID : "+this.empId+ " Name : "+
        this.empName + " Salary  : "+ this.empSal
    }
    this.calcEmpAnnualSal=function()
    {
        return ((this.empSal)*12);
    }
}
//-----------------------

function WageEmp(rateph,hr)
{
    this.ratePerHr=rateph;
    this.noOfHrs=hr;
    this.dispWageEmpInfo=function()
    {
        return  this.dispEmpInfo()+
        " Rate per hours : "+this.ratePerHr+ " No Of Hours : "+
        this.noOfHrs ;
    }
    this.calcWageEmpAnnualSal=function()
    {
            return(this.calcEmpAnnualSal()+
        (this.ratePerHr*this.noOfHrs*20))
    }
}
//----------------------
WageEmp.prototype=new Employee(555,"Balalji",5000.0);
var emp5=new WageEmp(500,4);
console.log(" 5 Wage  Emp Info : "+ emp5.dispWageEmpInfo());
console.log(" 5   Wage emp Annual Sal : "+ emp5.calcWageEmpAnnualSal());

