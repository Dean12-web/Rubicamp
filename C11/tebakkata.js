const filesystem = require('node:fs')
const readline = require('node:readline');

console.log('Selamat datang di permainan Tebak kata, silahkan isi dengan jawaban yang benar ya! \n')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Tebakan:  ',
});
filesystem.readFile('data.json', (err, rawdata) => {
    if (err) throw err;
    const data = JSON.parse(rawdata);
    let index = 0;
    console.log(data[index].definition);
    rl.prompt();
    rl.on('line', (line) => {
        if(line.toLowerCase() == data[index].term.toLowerCase()){
            console.log('Selamat, Anda Benar!\n'); 
            index++;
        }else{
            console.log('wkwk, Anda Kurang Beruntung\n')
        }
        
        if(index == data.length){
            console.log('Hore Anda Menang!\n')
            rl.close()
        }
        console.log(data[index].definition);
        rl.prompt();
    }).on('close', () => {
        // console.log('Good bye');
        process.exit(0);
    });
});


