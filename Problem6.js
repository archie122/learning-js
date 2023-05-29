function descendingOrder(n){
    return parseInt(n.toString().split('').sort().reverse().join(''));
}

console.log(descendingOrder(98374545783962));