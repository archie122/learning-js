function shortcut (string) {
    let result = string.replace(/[aeiouAEIOU]/gi, "")
    return result
}

console.log(shortcut("apple"))
