function posNeg(arr){
    result = [];
    for(i in arr){
        arr[i] < 0 ? result.push(--arr[i]):arr[i] > 0 ? result.push(++arr[i]):result.push(arr[i]);
    }
    return result;
}

console.log(posNeg([-2,5,8,-3,-6,8,0]));