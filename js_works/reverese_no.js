function reverese(num){
    console.log("before reversal",num);
    rev_no = 0;
    while(num > 0){
        rem = num % 10;
        rev_no = rev_no * 10 + rem;
        num =parseInt(num/10);
    }
    console.log("after reversal",rev_no);   
}

reverese(32243);