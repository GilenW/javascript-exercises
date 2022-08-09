const findTheOldest = function(arg) {
    
    let result = arg.reduce(function(prev, current){
        if(!current.yearOfDeath){
            current.yearOfDeath = new Date().getFullYear();
        }
        if(!prev.yearOfDeath){
            prev.yearOfDeath = new Date().getFullYear();
        }

        return ((prev.yearOfDeath - prev.yearOfBirth) > (current.yearOfDeath - current.yearOfBirth)) ? prev : current;

    })
    return result;
};

// Do not edit below this line
module.exports = findTheOldest;
