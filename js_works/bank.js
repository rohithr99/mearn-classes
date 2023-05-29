fixedAmount=1000000;
withDrawAmount=2000000;

if(withDrawAmount <= fixedAmount){
    console.log('your account has been debited with amount',withDrawAmount);    
}else{
    console.log('insufficient balance');
}
