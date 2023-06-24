var strStr = function(haystack, needle) {
    if(haystack.includes(needle)){
        for (let i = 0; i < haystack.length; i++) {
            if(haystack.substring(i, i + needle.length) === needle){
                return i;
            }
        }
    }else{
        return -1;
    }
};

console.log(strStr("mississippi","issip"));