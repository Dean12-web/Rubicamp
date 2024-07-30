symbols = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
};

var romanToInt = function(roman) {
    value = 0;
    for(let i = 0; i < roman.length; i++){
        if(symbols[roman[i]] < symbols[roman[i+1]]){
            value -= symbols[roman[i]]
        }else{
            value += symbols[roman[i]]
        }
    }
    return value
};

console.log("Script Testing untuk Konversi Romawi \n");
console.log("input      | expected      | result");
console.log("-----------|---------------|-------");
console.log("III        |   3           |", romanToInt('III'));
console.log("IX         |   9           |", romanToInt('IX'));
console.log("XIII       |   13          |", romanToInt('XIII'));
console.log("MCDLIII    |   1453        |", romanToInt('MCDLIII'));
console.log("MDCXLVII   |   1646        |", romanToInt('MDCXLVII'));