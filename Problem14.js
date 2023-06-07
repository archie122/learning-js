function toAcronym(inp){
    x = inp.split(" ")
    for (const i in x) {
        x[i] = x[i][0].toUpperCase()
    }
    return x.join("")
}

console.log(toAcronym('Portable Network Graphics'))