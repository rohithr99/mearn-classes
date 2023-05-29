// for(row = 1; row <= 5; row++){
//     s = "";
//     for(col = 1; col <= row; col++){
//         s += "* ";
//     }
//     console.log(s);
// }

// for(row = 1; row <= 5; row++){
//     s = "";
//     for(col = 5; col >= row; col--)
//     {
//         s += "* ";
//     }
//     console.log(s);
// }

// for(row = 1; row <= 5;row++ ){
//     s = "";
//     for(col = 1; col <= row; col++){
//         s += row;
//     }
//     console.log(s);
    
    
    
// }
// n = 10;

// for(row = 1; row <= n; row++){
//     s = " ";
//     for(col = 1; col <= n; col++){
//         s += col+" ";
//     }
//     console.log(s);
// }

//  *
// * *
//* * *

// for(row = 1; row <= 5; row++){
//     s = "";
//     for(space = 4; space >= row; space--){
//         s += " ";
        
//     }   
//     for(col = 1; col <= row; col++){
//         s += "* ";
//     }
//     console.log(s);
// }


// for(row = 1; row <= 5; row++){
//     s = "";
//     for(space = 1; space <= row; space++){
//         s += " ";
//     }
//     for(col = 5;col >= row; col--){
//         s += "* ";
//     }
//     console.log(s);
// }



// for(row = 1; row <= 4; row++){
//     s = "";
//     for(space = 1; space <=row; space++){
//         s += " ";
//     }
//     for(col = 1; col <= 5; col++){
//         s += "* ";
//     }
//     console.log(s);
// }




// n = 1;

// for(row = 1; row <= 5; row++){
    
//     s = "";
    
//     for (col=1; col <= row; col++){
        
//         s += n;
//         n++;
//     }
//     console.log(s);
// }




// for(row = 1; row <= 4; row++){
//     s ="";
//     for(col = 1; col <= row; col++){
//         if(col == 2 && row == 3){
//             s += "  "
//         }
//         else{
//             s += "* ";
//         }

//     }
//     console.log(s);
// }



// for(row  = 1; row <= 4; row++){
//     s = "";
//     for(space = 3; space >= row; space--){
//         s += " ";
//     }
//     for(col = 1; col <= row; col++){
//         if((row == 3 && col ==2) || (row == 4 && col == 2) || (row == 4 && col == 3)){
//             s += "  ";
//         }
//         else{
//             s += "* ";
//         }
//     }
//     console.log(s);
// }


//homework 1


// for(row = 1;row <= 5; row++){
//     s = "";
//     for(space = 5;space >= row; space--){
//         s += "  ";
//     }
//     for(col = 1; col <= row; col ++){
//         s += "* ";
//     }
//     console.log(s);
// }


//homework 2

// for(row = 1; row <= 5; row++){
//     s = "";
//     for(space = 5;space >= row; space--){
//         s += " ";
//     }
//     for(col = 1; col <= row; col++){
//         s += "* ";
//     }
//     console.log(s);
// }
// for(row = 2; row <= 5; row++){
//     s = "";
//     for(space = 1; space <= row; space++){
//         s += " ";
//     }
//     for(col = 5;col >= row; col--){
//         s += "* ";
//     }
//     console.log(s);
// }

//homework 3


for(row = 1; row <=4 ; row++){
    s = "";
    for(space = 4;space >= row; space--){
        s += " ";
    }
    for(col = 1; col <= row; col++){
        if((row == 3 && col ==2) || (row == 4 && col == 2) || (row == 4 && col == 3)){
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



// testing

// for(i = 1; i <= 4; i++){
//     s = "";
//     for(k = 6; k >=i; k--){
//         s += " ";
//     }

//     for(j = 1; j <= i; j++){
//         s += " *";
//     }
//     console.log(s);
// }

