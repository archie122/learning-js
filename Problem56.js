function sqInRect(lng, wdth){
    result_list = [];

    while(lng > 0 && wdth > 0) {
        result_list.push(Math.min(lng, wdth))
        if(lng > wdth){
            lng -= wdth;
        } else {
            wdth -= lng;
        }
    }

    return (result_list.length <= 1) ? null : result_list;
}


console.log(sqInRect(20,14))
