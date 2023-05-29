const users=[
    {id:100,first_name:"ram",email:"ram@gmail.com",dept:"sales",salary:25000},
    {id:101,first_name:"ravi",email:"ravi@gmail.com",dept:"it",salary:28000},
    {id:102,first_name:"raju",email:"raju@gmail.com",dept:"ba",salary:35000},
    {id:103,first_name:"rahul",email:"rahul@gmail.com",dept:"devop",salary:45000},
    {id:104,first_name:"akhil",email:"akhil@gmail.com",dept:"devop",salary:55000},
    {id:105,first_name:"aravind",email:"aravind@gmail.com",dept:"qa",salary:65000},
    {id:106,first_name:"ajay",email:"ajay@gmail.com",dept:"qa",salary:28000},

]

//find total number of users 

console.log(users.length);

//print names of developers

console.log(users.filter(i => i.dept == "devop").map(j => j.first_name));

//print the email id of user whose use id is 102

console.log(users.find(i => i.id == 102).email);

//print the user dept who have highest salary

console.log(users.reduce((n1 ,n2) => n1 > n2 ? n1 : n2).dept);

//salary of users whose dept id devop

console.log(users.filter(i => i.dept == "devop").map(i => i.salary));

//sort the users according to their salaries

console.log(users.sort((a ,b) => a.salary - b.salary));

//find the user who have lowest salary

console.log(users.reduce((i ,j) => i.salary < j.salary ? i : j).first_name);