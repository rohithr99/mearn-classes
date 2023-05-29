// emp = { id: 123, name: 'amal', designation: 'design',salary: 45000}

//value access

// console.log(emp['id']);

// console.log(emp.name);

// // add new data

// emp['age'] = 28;
// emp.location = 'kochi';


// //update

// emp['name'] = 'anujith';
// console.log(emp);

// //key check

// console.log("designation" in emp);

// //loop

// for(i in emp){
//     console.log(emp[i]);
// }

//incrementing 5K 

// emp.salary += 5000;

// console.log(emp);

// // array inside object

// emp["arr"] = [10, "hey"];
// console.log(emp);

// // object inside object

// emp['obj'] = {i : 10, j : 'nill'}
// console.log(emp);







// question

car = { name : 'Honda City',model: 'sedan',manufacture:'honda',price: 1400000};

//display manufacutre

console.log(car.manufacture);

//check model is present or not

console.log("model" in car);

// add property vairent ( automatic / manual)

car['varient'] = 'manual';

//add colors (black ,grey ,white)

car['colors'] = ['black','grey','white'];
console.log(car);