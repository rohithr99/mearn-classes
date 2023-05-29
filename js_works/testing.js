for(i=1;i<=4;i++){
    s=""
    for(a=4;a >= i;a--){   //loop for outer space
         s+=" "
     }
    for(j=1;j<=i;j++){
        if ((i==3 && j==2) || (i==4 && j==2) ||(i==4 && j==3)) {
            s+="  "
        }
        else{
            s+="* "
        }
    }
    console.log(s);
}
for(i=2;i<=4;i++){
    s=""
    for(a=1;a<=i;a++){   //loop for outer space
        s+=" "
    }
    for(j=4;j>=i;j--){
        if((i==3 && j==2) || (i==4 && j==2) || (i==4 && j==3)|| (i==2 && j==3)) {
            s+="  "
        }
        else{
            s+="* "
        }
    }
    console.log(s);
}