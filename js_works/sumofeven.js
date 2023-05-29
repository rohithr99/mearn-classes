// r1 = 4;
// r2 = 10;
// sum = 0;

// for( ; r1 <= r2; r1++){
//     if(r1 % 2 == 0){
//         sum += r1;
//     }
// }
// console.log(sum);


function add(n1, n2){
    sum = 0;
    for(;n1 <= n2; n1++){
        if(n1 % 2 == 0){
            sum += n1;
        }
    }
    return sum;
}

console.log(add(5, 10));