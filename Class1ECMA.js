// implicit calling to getter and setter
class Employee{
    constructor(){
        this._empId_=0; // implicit getter and setter
        this._empName_="";
        this.empSal=0.0;
    }
    get empId(){
        console.log("getter for empid");
        return this._empName_;
    }
    set empId(eid){
        console.log("setter for empid");
        this._empId_=eid;
    }
    get empName(){
        console.log("getter for empName");
        return this._empId_;
    }
    set empName(enm){
        console.log("setter for empName");
        this._empName_=enm;
    }
    getEmpSal(){
        console.log("getter for empSal");
        return this.empSal;
    }
    setEmpSal(sal){
        console.log("setter for empSal");
        this.empSal= sal;
        
    }
    dispEmpInfo(){
        return this._empId_ + this._empName_ + this.empSal;
    }
    calcEmpAnnualSal=function(){
        return ((this.empSal)*12);
    }
}

let emp1= new Employee();
emp1.empId=111;
emp1.empName="Manas";
emp1.setEmpSal(1000.0);
console.log('---------------------');
console.log("ID :" + emp1.empId + "Name :" + emp1.empName +
"Salary" +emp1.getEmpSal());
console.log('---------------------');
console.log(emp1.dispEmpInfo());
console.log(emp1.calcEmpAnnualSal());

 