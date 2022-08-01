const reverseString = function(string) {
    let reverseString = '';
    const result = [];

    let arrayOfString = string.split(" ");
    let index = arrayOfString.length - 1;
    for(let i = 0; i < arrayOfString.length; i++){
        for(let j = arrayOfString[i].length - 1; j >= 0 ; j--){
            reverseString += arrayOfString[i][j];
        }
        result[index] = reverseString;
        index--;
        reverseString = '';
    }
    return result.join(" ");
};

// Do not edit below this line
module.exports = reverseString;
