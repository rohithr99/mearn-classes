
function common(s1, s2){
    result = "";
    for(i = 0; i < s1.length;i++){
        for(j = 0;j < s2.length;j++){
            if(s1[i] == s2[j]){
                result += s1[i];
            }
        }
    }
    return result;
}
console.log(common("a", "abcd"));


s = "hello hi";
console.log(s.startsWith("he"));
console.log(s.endsWith("h"));