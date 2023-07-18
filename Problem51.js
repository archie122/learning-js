const sequenceSum = (begin, end, step) => {
    let x = []

    for (let i = begin; i <= end; i+=step) {
        x.push(i); 
    }

    const sum = x.reduce(add,0)

    function add(i, a) {
        return i + a;
    }

    return sum
};

console.log(sequenceSum(1, 5, 3));