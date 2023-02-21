function weirdMultiply(sentence) {
    let value = sentence.toString();
    let arr = value.split('');
    let multiple = 1;
    if (value.length == 1) {
        return value;
    } else {
        for (let i = 0; i < arr.length; i++) {
            multiple *= parseInt(arr[i]);
        }
        return weirdMultiply(multiple);
    }
}
console.log(weirdMultiply(39));
console.log(weirdMultiply(999));
// console.log(weirdMultiply(3));
