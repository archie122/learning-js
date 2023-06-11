var shuffle = function(nums, n) {
    let arr1 = nums.slice(0, n);
    let arr2 = nums.slice(n);
    let arr = [];

    for (let i = 0; i < arr1.length; i++) {
        arr.push(arr1[i]);
        arr.push(arr2[i]);
    }

    return arr;
};

console.log(shuffle([2,5,1,3,4,7], 3));