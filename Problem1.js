function squareSum(numbers){
    sum = 0;

    numbers.forEach(element => {
        sum += element ** 2;
    });

    return sum;
}

console.log(squareSum([1,2,3,4,5]))