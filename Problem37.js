function calculator(a,b,sign){
    let x = a + sign +  b
    
    try {
        return eval(x)
    } catch (error) {
        return "unknown value"
    }
}

console.log(calculator(1,"h","/"))