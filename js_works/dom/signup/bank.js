function register(){
    accno =  reacc.value;
    if(accno in localStorage){
        window.location = "index.html";
        alert("user already exist");
    }else{
        pass1 = repass.value;
        pass2 = reconfirm.value;
        if(pass1 == pass2){
            user = {accno , uname : reuser.value, passwd : pass2};
            localStorage.setItem(accno,JSON.stringify(user));
            window.location = "index.html";
            alert("account created");
        }else{
            alert("password doesn't match");
        }
    }
}

function login(){
    accnumber = loacc.value;
    pass = lopass.value;
    if(accnumber in localStorage){
        obj = JSON.parse(localStorage.getItem(accnumber));
        if(pass == obj.passwd){
            alert("login success");
        }else{
            alert("incorrect password");
        }
    }else{
        window.location = "register.html";
        alert("account not registered");
    }
}