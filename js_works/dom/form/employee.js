function addEmployee(){

    //javascript object
    newEmp = {
        ename: ename.value,
        id: eid.value,
        desig: edesig.value,
        salary: esalary.value
    }

    localStorage.setItem(eid.value,JSON.stringify(newEmp));

}

function home(){
    window.location = "home.html";
}

function searchEmp(){
    id = toSearch.value;
    //check key present or not

    if(id in localStorage){
        emp = JSON.parse(localStorage.getItem(id));
        result.innerHTML = `
            <ul>
            <li> Employee Name : ${emp.ename}</li>
            <li> Employee id : ${emp.id}</li>
            <li> Employee Designation : ${emp.desig}</li>
            <li> Employee Salary : ${emp.salary} </li>
            </ul>
        `
    }else{
        //alert employee not present
        alert("Employee not found");
        result.innerHTML = `<h3>No employee present with this ID</h3>`
    }
}