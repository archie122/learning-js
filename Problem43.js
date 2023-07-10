function findNeedle(haystack) {
    let x = "needle"
    let index = 0

    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === x) {
            index = i;
        }
    }


    return "found the needle at position " + index
}

console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]))