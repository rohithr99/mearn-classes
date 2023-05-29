function check(num1, num2){
    console.log("number 1 is",num1,"and number 2 is",num2);
    
    l1 = num1 % 10;
    l2 = num2 % 10;
    if(l1 == l2){
        console.log("same last digit");
    }else{
        console.log("not same");
    }
}

check(38,48);
