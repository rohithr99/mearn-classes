function hcf(num1 ,num2){
    a = num1;
    b = num2;

    while(num1 != num2){
        if(num1 > num2){
            num1 = num1 - num2;
        }
        else{
            num2 = num2 - num1;
        }
    }
    console.log("hcf of ",a,"and",b,"is ",num1);
}

hcf(10, 15);
