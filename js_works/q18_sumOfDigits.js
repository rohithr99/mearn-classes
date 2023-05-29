function sumOfDigits(num){
    console.log("number is ",num);
    sum = 0;
    while(num > 0){
        rem = num % 10;
        sum += rem;
        num = parseInt(num / 10);
    }
    console.log("sum = ",sum);
}
sumOfDigits(123); //38