// function prime(number){
//     flag = 1;
//     for(n = 2; n <= number/2; n++){
//         if(number % n == 0){
//             flag = 0;
//             break;
//         }
//     }
//     if(flag == 1){
//         console.log(number,"is prime");
//     }else{
//         console.log(number,"is not prime");
//     }
// }

// prime(13);


//without using flag


// function prime(number){
//     for(n = 2; n < number; n++){
//         if(number % n == 0){
//             break;
//         }
//     }
//     if(n == number){
//         console.log("prime number",number);
//     }else{
//         console.log("not a prime number",number);
//     }
// }

// prime(13);


//prime numbers in a range

// function prime(num1, num2){
//     for( ; num1 <= num2; num1++ ){
//         for(i = 2; i < num1; i++){
//             if(num1 % i == 0){
//                 break;
//             }
//         }
//         if(num1 == i){
//             console.log(num1);
//         }
        
//     }
    
// }

// prime(5,13);



//sum of prime numbers between 2 ranges

// function prime(num1, num2){
//     sum = 0;
//     for(; num1 <= num2; num1++){
//         for(i = 2; i < num1; i++){
//             if(num1 % i == 0){
//                 break;
//             }
//         }
//         if(num1 == i){
//             sum += num1;
//             console.log(num1);
//         }

//     }
//     console.log("sum = ", sum);
// }
// prime(1, 20);






function prime(number){
    flag = 1;
    for(n = 2; n <= number/2; n++){
        if(number % n == 0){
            flag = 0;
            break;
        }
    }
    if(flag == 1){
        return true+" "+number;
    }
    return false+" "+number
}

console.log(prime(15));
