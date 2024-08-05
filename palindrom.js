function isPalindrom(str) {
    let length = str.length - 1;
    for (let i = 0; i < length / 2 ; i++) {
        if (str[i] != str[length]) {
            return false
        }
        length--;
    }
    return true;
}

console.log(isPalindrom('nababan'))

console.log(isPalindrom('nam'))