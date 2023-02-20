function sentenceManipulation(sentence) {
    let vocal = sentence;
    let arr = vocal.split(' ');
    let konsonan
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].charAt(0) == 'a'|| arr[i].charAt(0) == 'i' || arr[i].charAt(0) == 'u' || arr[i].charAt(0) == 'e'|| arr[i].charAt(0) == 'o'){
            result.push(arr[i]);
        }else{
            konsonan = (arr[i]+arr[i].charAt(0)+'nyo').slice(1) ;
            result.push(konsonan);
        }
    }
    return result.join(' ')
}

console.log(sentenceManipulation('ibu pergi ke pasar bersama aku'));
