function square(arr){
    result = [];
    for(i in arr){
        result[i] = arr[i] ** 2;
    }
    return result;
}

console.log(square([2,5,7,9,2,3,8]));