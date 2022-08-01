const removeFromArray = function(arr1, arr2) {
    const removeElement = Array.prototype.slice.call(arr2);
    for(let i of removeElement){
        let arr1 = arr1.filter(item => item !== i);
    }
    return arr1;
};

// Do not edit below this line
module.exports = removeFromArray;
