const fibonacci = function(index) {
    if(index < 0){
        return 'OOPS';
    }
    const arr = [];
    for(let i = 0; i < index; i++){
        if(i === 0 || i === 1){
            arr[i] = 1;
        }
        else{
            arr[i] = arr[i-1]+arr[i-2];
        }
    }
    return arr[arr.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
