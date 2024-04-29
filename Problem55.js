function high(x){
    const arr = x.split(' ').map(m => ({word : m, sum : sumCharts(m)}))
    const maxWord = arr.reduce((max, current) => {
        return current.sum > max.sum ? current : max;
    }, arr[0]);

    return maxWord.word;
}

function sumCharts (s) {
    let i, n = s.length, acc = 0;
    for (i = 0; i < n; i++){
        acc += parseInt(s[i], 36) - 9;
    }

    return acc;
}

console.log(high('man i need a taxi up to ubud'))
