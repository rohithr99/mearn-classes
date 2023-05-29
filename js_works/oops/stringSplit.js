// s = "hi I am from Kothamangalam";

// a = s.split(' ');
// console.log(a);



// question
// s = "hello hi hello"
// { hello : 2, hi : 1}


// my own code

// s = "hello hi hello hello";

// a = s.split(' ');
// obj = {};

// for(i = 0; i < a.length; i++){
//     if(a[i] in obj){
//         obj[a[i]] += 1; 
//     }else{
//         obj[a[i]] = 1;
//     }
    
    
// }

// console.log(obj);



//working


// s = "hello hi hello";
// a = s.split(' ');
// obj = {};

// for(i of a){
//     if(i in obj){
//         obj[i] += 1;
//     }else{
//         obj[i] = 1;
//     }
// }

// console.log(obj);


//using array.map()

// s = " hello hi hello";
// a = s.split(' ');
// console.log(a);

// obj = {};
// a.map(i => i in obj ? obj.i += 1:obj.i = 1);
// console.log(obj);



//question 1

//find the longest word in the string

function loop(arr){
    max = arr[0].length;
    index = 0;
    for(i in arr){
        if(arr[i].length > max){
            max = arr[i].length;
            index = i;
        }
    }
    console.log(arr[index]);
}

s = "hello hi developer";
loop(s.split(' '));

// Method 2
// using arrayMethods

// s = "hello hi developer";
// console.log(s.split(' ').reduce((n1, n2) => n1.length > n2.length ? n1 : n2));


//question 2

//error

// function check(str){
//     recurring = str[0];
//     i = 1;
//     while(i < str.length){

//         if(str[i] != recurring){
//             i++;
//         }else{
//             return str[i];
//         }
//     }
//     return "no recurring letter";
// }

// console.log(check("malayalam"));



// working method
s = "abcdabc";
count = {};
repeat = "";

for(i of s){
    if(i in count){
        repeat += i;
    }else{
        count[i] = 1;
    }
}
console.log("first recursive",repeat[0]);