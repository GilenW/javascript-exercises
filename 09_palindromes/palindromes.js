const palindromes = function (string) {

    string = string.replace(/[^a-zA-Z ]/g, "");
    string = string.replace(/ /g, "");
    string = string.toLowerCase();
    const arr = string.split('');
    
    let readPointer = 0;
    let index = arr.length - 1;
    while(index !== readPointer){
        if(arr[readPointer] !== arr[index]){
            return false;
        }
        index--;
        readPointer++;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
