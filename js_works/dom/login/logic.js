function login() {
    userName = user.value;

    //store data in local storage
    localStorage.setItem("username",userName);


    //redirect to home page

    window.location = "home.html";

    alert("login successful");
}

//access data from local storage

usr = localStorage.getItem("username");

result.innerHTML = `<h1 class = "text-center">Welcome ${usr}</h1>`;

function logout(){
    localStorage.removeItem("username");
    window.location = "index.html";
    
}
