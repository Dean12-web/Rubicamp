const deretKaskus = (n)=>{
    let arr = [];
    let length =  n * 3
    for (let index = 3; index <= length; index+=3) {
        if ((index % 5 == 0) && (index % 6 == 0)) {
            arr.push('KASKUS');
        }else if (index % 5 == 0){
            arr.push('KAS')
        }else if (index % 6 == 0){
            arr.push('KUS')
        }else{
            arr.push(index);
        }
    }
    return arr;
}
console.log(deretKaskus(10))