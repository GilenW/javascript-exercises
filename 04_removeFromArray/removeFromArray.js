const removeFromArray = function() {

    const args = Array.from(arguments);
    let result = args[0];
    for(let i  = 1; i < args.length; i++){
        result = result.filter(item => item!== args[i]);
    }
    return result;

};

// Do not edit below this line
module.exports = removeFromArray;
