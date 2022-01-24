var prom1 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        let rollNoList = [1,2,3,4];
        resolve(rollNoList);
    },3000)
});

prom1.then((success)=>{
    console.log('resolved'+success);

}).catch((error)=>{
    console.log('error'+error);
});
