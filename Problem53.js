function squareDigits(num){
    return num.toString().split('').map(m => m*m).join('');
}


console.log(squareDigits(91444449))