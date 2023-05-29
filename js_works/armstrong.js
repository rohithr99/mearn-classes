// 1^3 + 5^3 + 3^3 = 153

function armstrong(num){
    let check = num;
    let armstrong = 0;
    while(num > 0){
        let remainder = num % 10;
        armstrong += remainder * remainder * remainder;
        num = parseInt(num / 10);
    }
    
    if(armstrong == check){
        console.log(check,"is an armstrong number");
    }else{
        console.log(check,"is not an armstrong number");
    }
} 

armstrong(153);

