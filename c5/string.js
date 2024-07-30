function stringManipulation(word) {
    const vokal = word[0].toLowerCase();
    const konsonan = word;
    if(vokal == 'a'|| vokal == 'i' || vokal == 'u' || vokal == 'e'|| vokal == 'o'){
        return word;
    }else{ 
        return konsonan.substring(1) + vokal + 'nyo'
    }
}
console.log(stringManipulation('Ayam'));
console.log(stringManipulation('bebek'));
// console.log(stringManipulation('ibu'),stringManipulation('pergi'),stringManipulation('ke'),stringManipulation('pasar'), stringManipulation('bersama'),stringManipulation('aku'));


// var str = 'buku';
// var result = str.substring(1) + str[0]
// console.log(result);