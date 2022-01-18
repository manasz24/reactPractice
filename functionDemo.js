
//process 1 
function greetMe(Say){
return "Welcome", Say; 
}

//process 2
var greetMe1=function(Say){
    return "Welcome", Say;
}

//process 3
var greetMe2= new Function("Name","return 'Welcome' +Name ");