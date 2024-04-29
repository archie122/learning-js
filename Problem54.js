function factorial(n) {
    let result = 1;
    
    if (n < 0 || n > 12) {
        return RangeError;
    }
    
    for (let i = 2; i <= n; i++) {
        if (n == 0) {
            result = 1;
            break;
        }
        else { 
            result *= i;
        } 
        
    }
    return result;
}

for (let i = -50; i < 100; i++) {
    console.log(i + ' : ' + factorial(i))
}