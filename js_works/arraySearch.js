function search(arr,target){
    for(i in arr){
        if(arr[i] == target){
            return console.log("present");
        }                                       // loop count = 10
    }
    return console.log("not present");
}
search([4,7,12,88,40,36,27,13,90,150],15);