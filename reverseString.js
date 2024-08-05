function reverseString(str){
    let strRev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        strRev += str[i]
    }
    return strRev;
}

console.log(reverseString('baca'))