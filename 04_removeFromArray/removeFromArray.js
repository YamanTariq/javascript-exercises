const removeFromArray = function(arr, ...targets) {
    
    if(arr == null) {
        return null;
    }
    
    let result = arr.filter( a => !targets.includes(a));
    return result;
};


// Do not edit below this line
module.exports = removeFromArray;
