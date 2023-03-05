const fs = require('node:fs');
const process = require('node:process');

const args = process.argv[2];
// console.log(args);
const daftarList = `>>>> JS TODO <<<<
$ node daftar.js <command>
$ node daftar.js list
$ node daftar.js task <task_id>
$ node daftar.js add <task_content
$ node daftar.js delete <task_id>
$ node daftar.js complete <task_id>
$ node daftar.js uncomplet (ctask_id)
$ node daftar.js list:otstanding asc|desc
$ node daftar.js list:completed asc|desc
$ node daftar.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N>
$ node daftar.js filter:<tag_name>`


const inputNew = [{
    number : 1,
    task : "Saya mau pergi lagi"
},{
    number : 2,
    task : "Saya mau pergi"
}]
const input = {
    number : 2,
    task : "Saya mau pergi"
}
let rawdata = fs.readFileSync('data.json');
let data = JSON.parse(rawdata)

const jsonString = JSON.stringify(inputNew);
fs.writeFileSync('data.json', jsonString)
if(args === undefined){
    console.log(daftarList)
}else{
    console.log('Data Added!')
}
