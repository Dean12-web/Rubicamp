const readline = require('node:readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'tulis kalimatmu disini> ',
});

rl.prompt();

rl.on('line', (line) => {
    console.log('hasil konversi : ' + sentenceManipulation(line))
    rl.prompt();
}).on('close', () => {
    console.log('Good bye');
    process.exit(0);
});


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
// sudo -a -u postgres