num1=10;
num2=20;

console.log("before swapping num1",num1);

console.log("before swapping num2",num2);

temp=num1;
num1=num2;
num2=temp;


console.log("after swapping num1",num1);

console.log("after swapping num2",num2);

//swapping without a temp variable

num1=num1+num2;
num2=num1-num2;
num1=num1-num2;
console.log(num1);
console.log(num2);