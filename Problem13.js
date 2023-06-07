var mergeTwoLists = function(list1, list2) {
    return list1.concat(list2).sort();
};

var removeDuplicates = function(nums) {
    var filteredArr = [...new Set(nums)]
    var unique = filteredArr.length

    for (let i = filteredArr.length; i < nums.length; i++) {
        filteredArr.push('_')
    }

    return `${unique}, nums = [${filteredArr}]`
};

console.log(removeDuplicates([1,1,2]))