var mergeTwoLists = function(list1, list2) {
    return list1.concat(list2).sort();
};

var removeDuplicates = function(nums) {
    var filteredArr = [...new Set(nums)];
    var unique = filteredArr.length;

    return unique;
};

console.log(removeDuplicates([1,1,2]))