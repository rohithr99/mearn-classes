// same method name and same number of arguments

class A{
    method(){
        console.log("isnide A");
    }
}

class B extends A{
    method(){
        console.log("inside B");
    }
}

obj = new B();

obj.method();

// we cannot call method inside class A in javascript


//encapsultaion
//abstraction
