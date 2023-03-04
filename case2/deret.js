const deretKaskus = (n) => {
    let arr = []
    let length = n * 3 //efektifitas code (memori)
    for (i = 3; i <= length; i += 3) {
        if ((i % 5 == 0) && (i % 6 == 0)) {
            arr.push('KASKUS')
        } else if (i % 5 == 0) {
            arr.push("KAS")
        } else if (i % 6 == 0) {
            arr.push('KUS')
        } else {
            arr.push(i);
        }
    }
    return arr;
}
console.log(deretKaskus(10));