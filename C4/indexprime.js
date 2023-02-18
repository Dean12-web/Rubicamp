function indexPrime(param1){
    let prime = [];
    let number = 2;

    while(prime.length < param1){
        let status = true;
        for(let i=2; i < number; i++){
            if(number % i === 0){
                status =false;
            }
        }
        if(status === true){
            prime.push(number)
        }
    number++
    }
// return prime;
return prime[param1-1];
}
console.log(indexPrime(4));
// console.log(indexPrime(500));
// console.log(indexPrime(2000));
// console.log(indexPrime(5000));
console.log(indexPrime(7000));
// console.log(indexPrime(37786));