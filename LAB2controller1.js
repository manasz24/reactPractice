
let productId = prompt("Please enter productId");
let productName = prompt("Please enter productName");
let productPrice = prompt("Please enter productPrice");
let productDescription = prompt("Please enter productDescription");
let productType = prompt("Please enter productType");
let productCatagory = prompt("Please enter productCatagory");

/**if(productId && productName && productPrice && productDescription){
    let msg = product(productId,productName,productPrice,productDescription);
    console.log(msg);
}**/

function product(productId,productName,productPrice,productDescription){
    this.productId=productId;
    this.productName=productName;
    this.productPrice=productPrice;
    this.productDescription=productDescription;
    this.printAllProduct = function (){
        return 'productId : ' + this.productId + ' \nproductName :' +this.productName + ' \nproductPrice :' +this.productPrice + ' \nproductDescription :'+this.productDescription;
    };
    //return printAllProduct();
}

function product1(productType){
    this.productType=productType;
    //function printProduct1(){
        this.printProduct1 = function(){
        return this.printAllProduct() +'\nproductType : ' + this.productType;
    }
    //printProduct1();
}

function product2(productCatagory){
    this.productCatagory=productCatagory;
    //function printProduct2(){
    this.printProduct2= function(){
        return this.printAllProduct() +'\nproductCatagory : ' + this.productCatagory;
    }
    //printProduct2();
}

product1.prototype = new product(productId,productName,productPrice,productDescription);
product2.prototype = new product(productId,productName,productPrice,productDescription);
var emp1 = new product1(productType);
console.log(emp1.printProduct1);
var emp2 = new product2(productCatagory);
console.log(emp2.printProduct2);
