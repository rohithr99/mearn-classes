var accounts = [
    {
      acno: 1000, ac_type: "savings", balance: 5000, transactions: [
        { to: 1001, amount: 500, note: "ebill", method: "g-pay" },
        { to: 1002, amount: 600, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
      ]
    },
    {
      acno: 1001, ac_type: "savings", balance: 6000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
 
      ]
    },
    {
      acno: 1002, ac_type: "current", balance: 8000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1001, amount: 5000, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
 
      ]
    },
    {
      acno: 1003, ac_type: "current", balance: 16000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1001, amount: 100, note: "erchrge", method: "phone-pay" }
 
      ]
    },
]

//question 1
//print all gpay transactions

for(i = 0; i < accounts.length; i++){
    for(j = 0;j < accounts[i].transactions.length; j++){
        if(accounts[i].transactions[j].method == "g-pay"){
            console.log(accounts[i].transactions[j]);
        }
    }
}

// trans = accounts.reduce((a ,b) => a.concat(b.transactions),[]) ;
// gpay = trans.filter(a => a.method == 'g-pay');
// console.log(gpay);
// console.log(accounts.map((i , j) => i.transactions[j].method == 'g-pay'));

// trans = accounts.filter(i => i.transactions).map((i) => i.transactions);

// gpay = trans.map((a,i) => a[i]);
// console.log(gpay);



//quesetion 2
// 2.print all transaction whose amount>3000?
for(i = 0; i < accounts.length; i++){
    for(j = 0;j < accounts[i].transactions.length; j++){
        if(accounts[i].transactions[j].amount > 3000){
            console.log(accounts[i].transactions[j]);
        }
    }
}


//question 3 
//print credit transaction of account 1002?
for(i = 0; i < accounts.length; i++){
    for(j = 0;j < accounts[i].transactions.length; j++){
        if(accounts[i].transactions[j].to == 1002){
            console.log(accounts[i].transactions[j]);
        }
    }
}


// 4.print debit transaction of account 1002?
for(i = 0; i < accounts.length; i++){
    if(accounts[i].acno == 1002){
        console.log(accounts[i].transactions);
    }
}


//5.print highest balance ac details?

console.log(accounts.reduce((a, b) => a.balance > b.balance ? a.balance : b.balance));

//6.Find first and last recursive elements in a string      (eg : first recursive:A  and last recursive is D)
// s="ABCDABFGDH";
obj = {};
rec = '';
for(i of s){
    if(i in obj){
        rec += i;
    }else{
        obj[i] = 1;
    }
}
console.log("First recursive",rec[0]);
console.log("Second recursive",rec[rec.length - 1]);
//7
for(row = 1; row <=4 ; row++){
    s = "";
    for(space = 4;space >= row; space--){
        s += " ";
    }
    for(col = 1; col <= row; col++){
        if((row == 3 && col ==2)){
                        s += "  ";
                    }
                    else{
                        s += "* ";
                    }
    }
    console.log(s);
}
for(row = 2; row <= 4; row++){
    s = "";
    for(space = 1; space <= row; space++){
        s += " ";
    }
    for(col = 4;col >= row; col--){
        if((row == 3 && col == 2) || (row == 4 && col == 2) || (row == 4 && col == 3) || (row == 2 && col ==3)) {
                        s += "  ";
                    }
                    else{
                        s += "* ";
                    }
    }
    console.log(s);
}



//8.Create a new array with names which starting with 'a'
// names=["anu","amal","vinu","ashok","amal","arun","anu","vonod"]

console.log(names.filter(i => i.startsWith('a')));

// 9.code for the given pattern?
for(row = 1;row <= 4; row++){
    s = "";
    for(space = 5;space >= row; space--){
        s += "  ";
    }
    for(col = 1; col <= row; col ++){
        s += "* ";
    }
    console.log(s);
}



//10. function with argument and return type to create a new array with prime numbers from 2 to 15

function prime(num1, num2){
    result = [];
    for(; num1 <= num2; num1++){
        for(i = 2; i < num1; i++){
            if(num1 % i == 0){
                break;
            }
        }
        if(num1 == i){
            result.push(i);
        }

    }
    return result;
}
console.log(prime(1, 15));

