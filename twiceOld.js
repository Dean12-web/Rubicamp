function twiceAsOld(dad,son) {
    let age = dad - son * 2 
    return age < 0 ? age * (-1) : age
}

console.log(twiceAsOld(55,30))