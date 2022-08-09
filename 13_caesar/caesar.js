const caesar = function(arg, s) {
    let result = '';
    if(s < 0){
        s = 26+(s%26);
    }
    for(let char of arg){

        let code = char.charCodeAt();
        if(code >= 65 && code <= 90){
            result += String.fromCharCode((code + s - 65)%26 +65);
        }
        else if(code >= 97 && code <= 122){
            result += String.fromCharCode((code + s -97)%26 +97);
        }
        else{
            result += char;
        }
    }
    return result;
};

// Do not edit below this line
module.exports = caesar;
