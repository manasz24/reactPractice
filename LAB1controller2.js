
let inpt;
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readline.on("close", function() {
    console.log("\nTHANK YOU !!!");
    process.exit(0);
    });

  readline.question("Please enter productId ? ", function(productId) {
    readline.question("Please enter productName ? ", function(productName) {
        readline.question("Please enter productName ? ", function(productPrice) {
            readline.question("Please enter productName ? ", function(productDescription) {
                
               inpt =`${productId},${productName},${productPrice},${productDescription}`;
               console.log('inpt',inpt);
               console.log(product(inpt));
               readline.close();
                
            });
    });
    });
});

function product(variab){
    const myArray = variab.split(",");
    this.productId=myArray[0];
    this.productName=myArray[1];
    this.productPrice=myArray[2];
    this.productDescription=myArray[3];
    function printAllProduct(){
        return 'productId : ' + this.productId + ' \nproductName :' +this.productName + ' \nproductPrice :' +this.productPrice + ' \nproductDescription :'+this.productDescription;
    };
    return printAllProduct();
}
  