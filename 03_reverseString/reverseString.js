const reverseString = function(string) {
    /**
     * Reverse a string
     * Start an array looping backwards and add each index
     * to a string
     */
    let result = "";

    for (let i = string.length - 1; i >= 0; i--) {
        result = result + string.charAt(i);
    }

    return result;
};

// Do not edit below this line
module.exports = reverseString;
