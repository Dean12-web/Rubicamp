const array = [19,23,123,12,44,12]
// array.push(32,12)



// // array.splice(5,0,14)
// function sum(){
//     result =0
//     for (let i = 0; i < array.length; i++) {
//         result+= array[i]
//     }
//     return result
// }
// console.log(Math.round(sum(array)/ array.length))
// console.log(array)
// let max = array[0]
// // let max = Math.min(...array)
// for (let i = 0; i < array.length; i++) {
//     if(array[i] > max){
//         max = array[i]
//     }
// }
// // console.log(max)
// let huruf = "saya pergi"
// // console.log(huruf.substring(1)+huruf[0])
// console.log(huruf.substring(2))

// let orang = ['Yudi','Gema','Rifqi','Fahmi']
// orang.unshift("Rifqi")
// const baru = orang.slice(1,2)
// orang.splice(2,0,"John")
// console.log(orang[2])

// const huruf ="saya pergi"
// const revArray =[]
// const length = huruf.length -1
// for (let i = length; i >= 0; i--) {
//     revArray.push(huruf[i])
// }
// // console.log(revArray.join(''))

// const n = 9
// function fibonaci(n) {
//     let number = [0,1]
//     for (let i = 0; i < n; i++) {
//         let row = number[i - 1] + number[i]
//         number = [...number,row]
//     }
//     return number
// }


// function isPalindrome(string) {
//     string = string.toLowerCase();
//     var charactersArr = string.split("");
//     var validCharacters = "abcdefghijklmnopqrstuvwxyz".split("");

//     var lettersArr = [];
//     charactersArr.forEach((char) => {
//         if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
//     });

//     return lettersArr.join("") === lettersArr.reverse().join("");
// }
// console.log(isPalindrome("nababan"))
