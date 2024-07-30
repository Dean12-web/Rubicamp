function indexPrime(param1){
    let prime = 0;
    let number = 2;

    while(prime < param1){
        let status = true;
        for(let i=2; i <= Math.sqrt(number); i++){
            if(number % i == 0){
                status = false;
            }
        }
        if(status === true){
            prime++
        }
    number++;
    }
return number - 1;
}


// function checkPrime(param1) {
//     for (let i = 2; i < param1; i++) {
//         if (param1 % i == 0) return false   
//     }
//     return param1 > 1;
// }
// function indexPrime(param) {
//     let bahan = 2;
//     let tukangHitung = 0;
//     while (tukangHitung < param) {
//         if(checkPrime(bahan)){
//             tukangHitung++
//         }
//         bahan++
//     }
//     return bahan - 1;
// }

// console.log(indexPrime(4));
console.log(indexPrime(500));
// console.log(indexPrime(2000));
// console.log(indexPrime(5000));
// console.log(indexPrime(7000));
// console.log(indexPrime(37786));