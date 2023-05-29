phones = [
    {id: 3,name:"pinephone",price: 15000,nw:'4G',display:"lcd"},
    {id: 4,name:"xiaomi",price:17000,nw:'4G',display:'amoled'},
    {id: 2,name:"realme",price: 27000,nw:'5G',display:"amoled"},
    {id: 1,name:"Vivo",price:12000,nw:'4G',display:"lcd"},
    {id: 5,name:"samsung",price:50000,nw:'5G',display:"amoled"}
]

// console.log(phones);


//question 1
//find all the product name

console.log(phones.map(i => i.name));


//question 2
//find name of products with led display

console.log(phones.filter(i =>i.display == "amoled").map(i => i.name));

//question 3
//sort the products according to their id

console.log(phones.sort((n1, n2) => n1.id - n2.id));

//question 4
//find prices of 5G phones

console.log(phones.filter(i => i.nw == "5G").map(j => j.name));


//question 5
// highest price phone

console.log(phones.reduce((n1, n2) => n1.price > n2.price ? n1:n2).name);

//question 6
// display the lowest price

console.log(phones.reduce((a, b) => a.price < b.price ? a : b).price);
