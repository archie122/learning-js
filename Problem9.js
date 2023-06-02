var countBits = function(n) {
    let answer = (n >>> 0).toString(2);
    let arr = String(answer).split("").map((num) =>{
        return Number(num);
    })
    
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 1){
            count++;
        }
    }

    return count;
}



console.log(countBits(9853834283));