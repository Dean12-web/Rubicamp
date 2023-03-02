const filesystem = require('node:fs')
const readline = require('node:readline');
const process = require('node:process');

const args = process.argv[2];
if (args === undefined) {
    console.log('Tolong sertakan nama file sebagai inputan soalnya')
    console.log("misalnya 'node tebakan.js data.json'");
}else{
    // console.log("number of arguments is "+process.argv[2]);
console.log(`Selamat datang di permainan Tebak-tebakan, kamu akan diberikan pertanyaan dari file ini ${process.argv[2]}!`);
console.log('Untuk bermain, jawablah dengan jawaban yang sesuai.');
console.log(`gunakan 'skip untuk menangguhkan pertanyaannya, dan di akhir pertanyaan akan ditanyakan lagi \n`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Tebakan:  ',
});
let rawdata = filesystem.readFileSync('data.json');
let data = JSON.parse(rawdata);
let index = 0;
let wrong = 0;
console.log(`Pertanyaan: ${data[index].definition}`);
rl.prompt();
rl.on('line', (line) => {
    if (line === 'skip') {
        data.push(data[index])
        index++;
        console.log(`\nPertanyaan: ${data[index].definition}`);
    } else {
        if (line == data[index].term) {
            console.log('\nAnda Beruntung!\n');
            wrong = 0;
            index++;
            if (index == data.length) {
                rl.close()
            } else {
                console.log(`Pertanyaan: ${data[index].definition}`)
            }
        } else {
            wrong++;
            console.log(`\nAnda Kurang Beruntung! anda telah salah ${wrong} kali, silahkan coba lagi`)
        }
    }
    rl.prompt();
}).on('close', () => {
    console.log('Anda Berhasil');
    process.exit(0);
});
    
}
