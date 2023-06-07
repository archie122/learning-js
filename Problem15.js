function firstNonRepeatingLetter(s) {
    var freq = {};
    let result = ''
    let hasUpperCase = /[A-Z]/.test(s)
    
    s = s.toLowerCase()

    for (var i = 0; i < s.length; i++) {
        var c = s.charAt(i);
        if (freq[c]) {
           freq[c]++;
        } else {
           freq[c] = 1;
        }
    }

    for (var i = 0; i < s.length; i++) {
        var c = s.charAt(i);
        if (freq[c] === 1) {
            result = c;
            break;
        }
    }

    if (hasUpperCase) {
        result = result.toUpperCase()
    }

    return result
}

console.log(firstNonRepeatingLetter('sTreSSS'))