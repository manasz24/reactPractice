
let productId = prompt("Please enter productId");
let productName = prompt("Please enter productName");
let productPrice = prompt("Please enter productPrice");
let productDescription = prompt("Please enter productDescription");

if(productId && productName && productPrice && productDescription){
    let msg = product(productId,productName,productPrice,productDescription);
    console.log(msg);
}

function product(productId,productName,productPrice,productDescription){
    this.productId=productId;
    this.productName=productName;
    this.productPrice=productPrice;
    this.productDescription=productDescription;
    function printAllProduct(){
        return 'productId : ' + this.productId + ' \nproductName :' +this.productName + ' \nproductPrice :' +this.productPrice + ' \nproductDescription :'+this.productDescription;
    };
    return printAllProduct();
}

    