class A{        // parent / super / base
    methoda(){
        console.log("inside A class");
    }
}

class B extends A{      //child / sub / derived
    methodb(){
        console.log("inside B class");
    }
}

obj = new B();
obj.methodb();
obj.methoda();

//javascript doesn't support multiple inheritance