function pola(str) {
    let length = 10
    let arr1 = str.split('*');
    let arr2 = str.split(' ');
    let arr3 = str.split(' ');
    let val =[];
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if(parseInt(arr1[0].replace('#',i)) * parseInt(arr2[2]) === parseInt(arr3[4].replace('#',j))){
                val.push(i,j);
            }
            
        }
    }
    return val
}
console.log(pola('42#3 * 188 = 80#204'))
console.log(pola('8#61 * 895 = 78410#5'))