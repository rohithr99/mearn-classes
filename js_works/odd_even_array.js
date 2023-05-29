function oddEven(arr){
    even = [];
    odd = [];
    for(i in arr){
        arr[i] % 2 == 0 ? even.push(arr[i]) : odd.push(arr[i]);
    }
    return console.log("odd array = ",odd,"even array = ",even);
}

oddEven([5,6,7,8,9]);