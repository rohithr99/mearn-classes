function fiveOrSeven(num){
    while(num > 0){
        if(num % 5 == 0 || num % 7 == 0){
            console.log(num);
        }
        num--;
    }
}

fiveOrSeven(20);