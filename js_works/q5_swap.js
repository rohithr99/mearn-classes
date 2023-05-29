function swap(num1, num2){
    console.log("before swap");
    console.log("num1 =" ,num1,"num2 = ",num2);
    
    num1 = num1 + num2;
    num2 = num1 - num2;
    num1 = num1 - num2;

    console.log("after swap");
    console.log("num1 =",num1,"num2 =", num2);
    
}

swap(10, 20);
