// function sum(){
//     n1 = 10;
//     n2 =20;

//     return n1 + n2;

// }

// a = sum();
// console.log(a);

 // pos or neg


// 



//factorial

// function fact(num){
//     product = 1;
//     for(; num >= 1; num--){
//         product *= num;
//     }
//     console.log(product);
// }

// fact(6);

//fibonacci

// function fibo(n){
//     n1 = 0;
//     n2 = 1;
//     for(; n>= 0;n--){
//         console.log(n1);
//         n3 = n1 + n2;
//         n1 = n2;
//         n2 = n3;
//     }
    
// }

// fibo(6);

//nos bt 2 ranges

function range(num1, num2){
    for(; num1 <= num2; num1++){
        if(num1 % 2 == 0){
            console.log(num1);
        }
    }
}

range(10,20);
