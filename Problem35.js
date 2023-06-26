var searchInsert = function(nums, target) {
    let i = 0;
    while (i < nums.length && nums[i] < target) {
        i++;
    }
    return i;
};

console.log(searchInsert([1,3,5,6], 7));