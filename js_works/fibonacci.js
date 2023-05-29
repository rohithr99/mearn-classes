// print first 10 terms of fibonacci series


n1 = 0;
n2 = 1;
sum = 0;
number = 15;
// console.log(n1,n2);

for(i = 1; i <= number; i++){
    console.log(n1);
    sum = n1 + n2;
    // console.log(sum);
    n1 = n2;
    n2 = sum;
}

//when a string is added to a number we will get a string.
// n=22;
// s="22";
// sn = n+s;
// console.log(typeof(sn));
