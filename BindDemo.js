var Employee={
    age:42,
    per:56,
    getAge:function(){
        return this.age;
    }
}

//console.log(Employee.age);
console.log(Employee.getAge());
const showMyAge = Employee.getAge();
console.log('showMyAge :' + showMyAge);
const showMyAge2 = Employee.getAge;
console.log('showMyAge2 :' + showMyAge2()); // this is an issue cause context changes ---> not currently employee context
//solution :
const showMyAge3 = showMyAge2.bind(Employee);
console.log('show my age 3 :' +showMyAge3());

//trying separate -- this is true : this means we can bind anything
const showMyAge4 = function(){
        return this.per;
    };

    const showMyAge5 = showMyAge4.bind(Employee);
    console.log('-----');
    console.log(showMyAge4()); // cause it is not binded
    console.log(showMyAge5());

