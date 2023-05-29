//id , product name, price,stock value
products = [
    [2, "hide & seek", 30 , 15],
    [5, "oreo", 40, 20],
    [1, " tiger", 20, 65],
    [3, "bourbon", 20, 10],
    [7, "dark fantasy",40 ,5],
    [6, "moms magic", 30 , 45],
    [4, "parle-g", 25, 50]
]
//print all products name
// console.log(products.map(n => n[1]));

// print name of products under 30 rupees

// console.log(products.filter(n => n[2] < 30).map(i => i[1]));

// display details of oreo

// console.log(products.filter(i => i[1] == "oreo"));

//find item which have less stoke value

//method 1
// console.log(products.sort((n1 ,n2) => n1[3] - n2[3])[0][1])


//method 2
// console.log(products.reduce((n1 ,n2) => n1[3] < n2[3] ? n1 : n2)[1]);

//find the total price
// console.log(products.map(i => i[2]).reduce((n1, n2) => n1 + n2));

//rearrange the array according to their id's 

// console.log(products.sort((n1, n2) => n1[0] - n2[0]));

// console.log(products.reduce((n1, n2) => n1[0] < n2[0] ? n1 : n2));

//find item with less price

// console.log(products.reduce((a, b) => a[2] < b[2] ? a : b));


// console.log(products.reduceRight((a, b) => a[2] < b[2] ? a : b)); // reduceRight is used when we need first element which satisfies the condition


//doubt ....if both prices are same then what to do?

// price of item which have highest stoke value

// console.log(products.reduce((a ,b) => a[3] > b[3] ? a : b)[2]);

// console.log(products.some(n => n[2] < 22));


//forEach()
//print id only

// products.forEach(i => console.log(i[0]));


