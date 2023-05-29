function positiveSum(n){
    console.log(n);
    sum = 0;
    for(i = 0; i < n.length; i++){
        if(n[i] > 0){    
        sum += n[i];
        }
    }
    console.log("sum = ",sum);
}

positiveSum([10,5,8,-6]);