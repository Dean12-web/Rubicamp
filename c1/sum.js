function sum(){
    let value = 0;
    for (let i = 0; i<arguments.length; i++){
        value += arguments[i]
    }
    return value
}

console.log(sum(1,2,7));
console.log(sum(1,4));
console.log(sum(11));
console.log(sum(10,3,6,7,9))

