const weirdMultiply = (sentence) => {
    const value = sentence.toString();
    const arr = Array.from(value);
    let multiple = arr[0];
    if(value.length == 1){
        return value;
    }else{
        for (let i = 1; i < arr.length; i++) {
            multiple *= arr[i];
        }
        return weirdMultiply(multiple);
    }
}
console.log(weirdMultiply(39));
console.log(weirdMultiply(999));
console.log(weirdMultiply(3));



// mulitiple * tidak perlu di parsing