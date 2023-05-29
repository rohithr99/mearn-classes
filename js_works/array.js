function aNames(arr){
    n = [];
    for(i in arr){
        
        if(arr[i][0] == "a"){
            n.push(arr[i]);
        } 
    }
    return n;
}
console.log(aNames(["anu","megha","vimal","anujith","amal","dinraj","shiyaz"]));