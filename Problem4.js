function countTheAnimals(animals) {
    let numArr = [];
    let sum = 0;
    
    for (let animal in animals) {
        numArr.push(animals[animal]);
    }

    numArr = numArr.map(Number);
    for (let i = 0; i < numArr.length; i++) {
        sum += parseInt(numArr[i], 2);
    }

    return sum;
}

console.log(countTheAnimals({aardvark: '1101', tiger: '1100', donkey: '1100', emu: '1010'}));
