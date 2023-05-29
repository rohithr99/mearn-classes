// n = 5;
// product = 1;
// for(; n > 0;n--){
//     product *= n;
// }
// console.log(product);

// n = 5;
// product = 1;

// while(n > 0){
//     product *= n;
//     n--;
// }
// console.log(product);


//factorial with return value

function fact(n){
    product = 1;
    while(n > 0){
        product *= n;
        n--;
    }
    return product;

}
console.log(fact(5));