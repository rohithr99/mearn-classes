//Write javascript program to   display all prime numbers in an interval


function prime(num1, num2){
    for(;num1 <= num2; num1++){
        for(i = 2; i < num1; i++){
            if(num1 % i == 0){
                break;
            }
        }
        if(num1 == i){
            console.log(num1);
        }
    }
}

prime(20 ,40);