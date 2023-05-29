class A{
    methoda(){
        console.log("inside A class");
    }
}

class B extends A{
    methodb(){
        console.log("inside B class");
    }
}

class C extends B{
    methodc(){
        console.log("inside C class");
    }
}

obj_c = new C();

obj_c.methoda();
obj_c.methodb();
obj_c.methodc();