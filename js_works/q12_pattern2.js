n = 6

for(i = 1; i <= n; i++){
    s = "";
    for(space = 1;space <= n - i; space++){
        s += "  ";
    }
    for(j = 1; j < i; j++){
        s += "* ";
    }
    console.log(s);
}

for(k = 2; k <= n; k++){
    t = "";
    for(sp = 1; sp < k; sp++){
        t += "  ";
    }
    for(l = 1; l <= n - k; l++){
        t += "* ";
    }
    console.log(t);
}