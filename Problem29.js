var removeElement = function(nums, val) {
    const filteredArr = nums.filter(num => num !== val);
    return filteredArr.length
};

console.log(removeElement([0,1,2,2,3,0,4,2], 2))