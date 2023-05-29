let happyFound = 0;

// function to check if a number is happy or not

function isHappy(n) {
    let sum = 0;
    while (n > 0) {
      let e = n % 10;
      n = parseInt(n / 10);
      sum += e * e;
    }
    if (sum === 1) {
      return true;
    } else if (sum > 1 && sum <= 4) {
      return false; 
    }
    return isHappy(sum);
  }

// iterating through... till 5 Happy numbers
function happy(){
    for(i = 1; happyFound < 5; i++){
        result = isHappy(i);
        if(result == true){
            console.log(i);
            happyFound++;
        }
    }
}

happy();