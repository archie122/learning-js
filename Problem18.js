var map = function(arr, fn) {
    var result = [];
    for (let i = 0; i < arr.length; i++) {
        result[i] = fn(arr[i], i)
    }

    return result
};


fn = function plusone(n) { return n + 1; }
fn2 = function plusI(n, i) { return n + i; }

console.log(map([1, 2, 3], fn2))