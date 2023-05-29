score=57;

// 90-100  -- A+
//80 -89 --A

//60-69 B
//fail

// 100 above -- invalid score

if(score > 89 && score < 101){
    console.log('A+');
}
else if(score > 79 && score < 90){
    console.log('A');
}
else if(score > 69 && score < 80){
    console.log('B+');
}
else if(score > 59 && score < 70){
    console.log('B');
}else if(score < 60){
    console.log('FAIL');
}else{
    console.log('INVALID SCORE');
}


// simplest code.. no using of &&

// score = 101;
// if(score > 100){
//     console.log('invalid');
// }
// else if(score >= 90){
//     console.log('A+');
// }
// ...etc