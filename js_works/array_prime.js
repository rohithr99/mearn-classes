prime_nos= [];
nonPrime = [];

function primeNonPrime(arr){
    for(i = 0; i < arr.length; i++){
        flag = 0;
        for(j = 2;j <= Math.floor(arr[i] / 2); j++){
            if(arr[i] % j == 0){
                flag = 1;
            }
        }
        flag == 1 || arr[i] == 1 ? nonPrime.push(arr[i]): prime_nos.push(arr[i]);
    }
    console.log("prime array = ",prime_nos,"non prime = ",nonPrime);
}


primeNonPrime([11,25,37,55,777,56]);



// valid phone numbers


// function phone(arr){
//     valid = [];
//     invalid = [];
//     for(i in arr){
//         arr[i].startsWith("+91") && arr[i].length == 13 ? valid.push(arr[i]) : invalid.push(arr[i]);
//     }
//     console.log("valid = ",valid,"invalid = ",invalid);
// }

// phone(["+911234567892","+911234567897","+91123456783","+5112345678923","+9112345058923","+9112345678903","+91123456923"]);






