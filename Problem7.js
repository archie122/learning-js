function longest(s1, s2) {
    unique = s1 + s2
    unique = unique.split('').sort()
    unique = new Set(unique);
    unique = [...unique].join('')
    return unique
}

console.log(longest("aretheyhere", "yestheyarehere"));