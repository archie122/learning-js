var singleNumber = function(nums) {
    let count = {};

    for (let i = 0; i < nums.length; i++) {
        if (count[nums[i]]) {
            count[nums[i]]++;
        } else {
            count[nums[i]] = 1;
        }
    }

    for (let key in count) {
        if (count[key] === 1) {
            return key;
        }
    }
};


console.log(singleNumber([4,1,2,1,2]))