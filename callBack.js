//------------------callback--------------------

var greetMe=function(name){
    return ("Happy New Year :"+ name);
}

var wishMe= function(greet,year){
console.log("Type of Greet: ", typeof(greet));
console.log(greet("Manas"), " " , year);
}

wishMe(greetMe,2022);




//--------passing function as a param is called callback-----