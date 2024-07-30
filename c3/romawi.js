const angka = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const rom = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
function roman(n){
    let result = ''
    for (let i = 0; i<angka.length; i++){
        while (angka[i] <= n)
            result += rom[i],
        n -= angka[i]    
    }
    return result
}

// function romawi(n) {
//     let hsl = ''
//     for (let i = 0; n; i++) {
//         while (n >= angka[i]) {
//             hsl += rom[i]
//         n -= angka[i]
//         }
//     }
//     return hsl;
// }

console.log("Script Testing untuk Konversi Romawi \n");
console.log("input  | expected      | result");
console.log("-------|---------------|-------");
console.log("4      |   IV          |", roman(4));
console.log("9      |   IX          |", roman(9));
console.log("13     |   XIII        |", roman(13));
console.log("1453   |   MCDLIII     |", roman(1453));
console.log("1646   |   MDCXLVI     |", roman(1646));