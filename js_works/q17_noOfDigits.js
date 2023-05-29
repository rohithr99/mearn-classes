function noOfDigits(num){
    console.log(num);
    count = 0;
    while(num > 0){
        num = parseInt(num / 10);
        count++;
    }
    console.log("number of digits:",count);
}
noOfDigits(89768);