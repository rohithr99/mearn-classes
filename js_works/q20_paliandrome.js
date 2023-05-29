function paliandrome(str){
    console.log("string is ",str);
    len = str.length - 1;
    for(i = 0; i <= len / 2; i++){
        if(str[i] != str[len - i]){
            return false;
        }
    }
    return true;
}

string = "dabccbad";
console.log(paliandrome(string));