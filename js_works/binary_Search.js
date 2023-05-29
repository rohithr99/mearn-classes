// a = [7,5,3,2,1,9,0];

//sort

// a.sort((n1, n2) => n1 - n2);
// console.log(a);

//searching

// function binary(arr,target){
//     arr.sort((n1, n2) =>n1 - n2);
//     start = 0;
//     end = arr.length - 1;

//     while(start <= end){
//         mid = Math.floor(start + (end - start) / 2);

//         if(arr[mid] < target){
//             start = mid + 1;
//         }else if(arr[mid] > target){
//             end = mid - 1;
//         }else{
//             return mid;
//         }
//     }
//     return "not found";
// }

// console.log(binary([4,7,12,88,40,36,27,13,90,150], 15)); // loop count = 4




//question -- total expense


// function expenses(arr){
//     total = 0;
//     for(i = 0; i < arr.length; i++){
//         total += arr[i];
//     }
//     return total;
// }

// console.log(expenses([12000,32000,45000,11000,31000,22000,43000]));



//minimum expense

// function expenses(arr){
//     arr.sort((a , b) => a - b);
//     return arr[0];
// }


// console.log(expenses([12000,32000,45000,11000,31000,22000,43000]));

// function maxi(arr){
//     max = arr[0];

//     for(i = 0;i < arr.length;i++){
//         if(max < arr[i]){
//             max = arr[i];
//         }
//     }
//     return max;
// }
// console.log(maxi([12000,32000,45000,11000,31000,22000,43000]));


// multi array

// function ten(arr){
//     result = [];
//     for(r = 0;r < arr.length;r++){
//         for(c = 0;c < arr[r].length;c++){
//             if(arr[r][c] > 10){
//                 result.push(arr[r][c]);
//             }
//         }
//     }
//     return result;
// }

// console.log(ten([[8,9,78],[90,76,4],[2,45,0,1]]));








// function sum(arr,target){
//     count = 0;
//     arr.sort((a ,b) => a - b);
//     start = 0;
//     end = arr.length - 1;
//     while(start <= end){
//         if(arr[start] + arr[end] == target){
//             return arr[start] + " " + arr[end];
//         }else if(arr[start] + arr[end] < target){
//             start++;
//         }else{
//             end--;
//         }
//     }
//     return "not found;";
    
// }
// console.log(sum([4,8,6,3,2,1],9));


//after sorting   [1,2,3,4,6,8]

function sum(arr,target){
    console.log("sum = ",target);
    console.log("Array is ",arr);
    count = 0;
    arr.sort((a ,b) => a - b);
    start = 0;
    end = arr.length - 1;
    while(start <= end){
        count++;
        if(arr[start] + arr[end] == target){
            console.log(arr[start++],arr[end--]);
        }else if(arr[start] + arr[end] < target){
            start++;
        }else{
            end--;
        }
    }
    console.log("loop count = ",count);
}
sum([4,8,6,3,2,1],9);
