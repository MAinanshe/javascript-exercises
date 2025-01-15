const removeFromArray = function(array, ...param) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        if (!param.includes(array[i])) {
            result.push(array[i]);
        }
       
    }

    return result;
};  

// Do not edit below this line
module.exports = removeFromArray;
