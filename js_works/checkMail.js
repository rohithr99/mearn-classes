// function checkMail(s){
//     return s.endsWith("@gmail.com") ?"valid" : "invalid";
// }

// console.log(checkMail("rohith@gmail.com"));

function phone(s){
    return s.startsWith("+91") && s.length == 13 ? "valid" : "not valid";
}

console.log(phone("+9112345678923"));