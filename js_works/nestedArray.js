
employees = [
    [1, "anu","developer","kochi",45000],
    [4,"amal","developer","calicut",65000],
    [2,"mega","Tester","kochi",30000],
    [3,"neethu","HR","trissur",50000]
];

console.log("Total number of employees = ",employees.length);
// max = employees[0][4];
// for(i in employees){
//     if(employees[i][4] > max){
//         max = employees[i][4];
//     }
// }
// console.log(employees[max]);
// for(i in employees){
//     console.log(employees[i][2]);
// }

//max salary employee
// employees.sort((a, b) => a[0] - b[0]);

// console.log(employees[employees.length - 1]);

// for(i in employees){
//     if(employees[i][3] == "trissur"){
//         console.log(employees[i][4]);
//     }
// }

// employee name print ..  whose salary is minimum 

// console.log(employees.sort((a, b) => a[4] - b[4])[0][1]);



// print all employees names using map
// console.log(employees.map(i => i[1]));

// print salary of  employee whose place is trissur
// console.log(employees.filter(n => n[3] == "trissur").map(i => i[4]));
// console.log(employees.find(n => n[3] == "trissur"));

//print all developers name - filter

// console.log(employees.filter(n => n[2] == "developer").map(i => i[1]));


// ar = [10,37,86,45,89,90,56,5];
// find

// console.log(ar.find(n => n%5 == 0));

// itll print first condition satisfied element from array
