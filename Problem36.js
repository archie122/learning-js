function solution(nums){
    if (nums == null){
        return 0
    } else {
        return nums.sort(function(a, b){return a - b})
    }
}

console.log(solution(null))