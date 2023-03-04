const sum =  function() {
    let value = 0;
    for (let i = 0; i < arguments.length; i++) {
        value += arguments[i];
    }
    return value;
}
console.log(sum(1,2,7));