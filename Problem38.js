function secondSymbol(s, symbol) {
    let x = [];
    for (let i = 0; i < s.length; i++)
        if(s[i] == symbol) x.push(i)

    return x.length < 2 ? -1 : x[1];

}

console.log(secondSymbol("hello", "l"))