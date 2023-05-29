n = 7;
for(row = 1; row <= n; row++){
    s = "";
    for(space = 1;space < row; space++){
        s += " ";
    }
    
    for(col = 0; col < 2 * (n - row) + 1 ;col++){
        s += "*";
    }
    console.log(s);
}

for(row = 2; row <= n; row++){
    s = "";
    for(space = 1;space < n - row + 1; space++){
        s += " ";
    }
    
    for(col = 0; col < 2 * row - 1 ;col++){
        s += "*";
    }
    console.log(s);
}

