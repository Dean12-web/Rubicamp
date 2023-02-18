function stringManipulation(word) {
    const vokal = word[0];
    const konsonan = word;
    if(vokal == 'a'|| vokal == 'i' || vokal == 'u' || vokal == 'e'|| vokal == 'o'){
        return word;
    }else{ 
        return konsonan.substring(1) + vokal + 'nyo'
    }
}
console.log(stringManipulation('ayam'));
console.log(stringManipulation('bebek'));


// var str = 'buku';
// var result = str.substring(1) + str[0]
// console.log(result);