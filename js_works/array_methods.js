// arr = [1, 2, 3, 4, 6, 8, 9];

//map
//output --squared numbers
// console.log(arr.map(n => n**2));

//filter
//output -- even[]

// console.log(arr.filter(n => n % 2 == 0));

//question 1
// console.log(arr.map(n => n > 5? ++n: --n));

// question 2
// arr = [10, 37, 86, 45, 89, 90, 56, 5];
// console.log(arr.filter(n => n % 5 == 0));


//reduce

// a = [1, 4, 6, 7, 3];

// sum

// console.log(a.reduce((a, b) => a + b));
// if we are using any arithemetic oprators inside .reduce class then every element should be numbers else it wont work
// and it doesn't matter in case of comparison

// greatest

// console.log(a.reduce((a, b) => a > b ? a : b));

// lowest

// console.log(a.reduce((a ,b) => a > b ? b : a));


//some()

// console.log(a.some(i => i % 2 == 0));
// if the condition is satisfied inside the array then the output will be true else false

//forEach()

// a = [1, 7, 4 ,3, 5];

// a.forEach(i => console.log(i ** 3));

//includes

// console.log(a.includes(7));

//flat()
// it is used to convert a nested array into a single array

a = [[2,5],[8,12],[45,9]];

// console.log(a.flat().filter(n => n > 10));

console.log(a.flat().reduce((n1 ,n2) => n1 > n2 ? n1 : n2));