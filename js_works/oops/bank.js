//bank 
//acc creation - constructor
//deposit - amount
// withdraw - amount

class bank{
    constructor(name, accNo){
        this.name = name;
        this.balance = 0;
        this.accNo = accNo;
    }
    deposit(depAmount){
        this.depAmount = depAmount;
        if(this.depAmount <= 0){
            console.log("Enter correct amount");
        }else{
            this.balance += this.depAmount;
            console.log("Now your current balance is",this.balance);
        }
    }
    withdraw(withAmount){
        this.withAmount = withAmount;
        if( this.balance < this.withAmount){
            console.log("Insufficient balance");
        }else{
            console.log("Now your current balance is ",this.balance - this.withAmount);
        }
    }
}

b1 = new bank("Rohith", 8359394355);
b1.deposit(900);
b1.withdraw(800);
