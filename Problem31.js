var reverse = function(x) {
    let xCopy = x
    let result = 0

    result = parseInt(x.toString().split('').reverse().join(''))

    if (result < Math.pow(-2, 31) || result > Math.pow(2, 31) - 1) {
        return 0;
    }

    if (xCopy < 0) {
        return result * -1
    }

    return result
};

console.log(reverse(120))