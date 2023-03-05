const fs = require('node:fs');
const process = require('node:process');

const args2 = process.argv[3];
const args1 = process.argv[2];
// console.log(args);
const daftarList = `>>>> JS TODO <<<<
$ node daftar.js <command>
$ node daftar.js list
$ node daftar.js task <task_id>
$ node daftar.js add <task_content
$ node daftar.js delete <task_id>
$ node daftar.js complete <task_id>
$ node daftar.js uncompleted (ctask_id)
$ node daftar.js list:outstanding asc|desc
$ node daftar.js list:completed asc|desc
$ node daftar.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N>
$ node daftar.js filter:<tag_name>`


let rawdata = fs.readFileSync('data.json');
let data = JSON.parse(rawdata)

// const jsonString = JSON.stringify(inputNew);
// fs.writeFileSync('data.json', jsonString)
if(args1 === undefined){
    console.log(daftarList)
}else{
    if(args1 === "help"){
        console.log(daftarList);
    }else if(args1 === "list"){
        console.log("Daftar pekerjaan");
        for (let i = 0; i < data.length; i++) {
            console.log(`${i + 1}. [${data[i].complete ? 'X' : ' '}] ${data[i].task_content}`)    
        }
    }else if(args1 === 'task'){
        console.log("data ke i telah di tugaskan")
    }else if(args1 === 'add'){
        data.push({"task_id" : "5","task_content" : "Saya pergi kepasar hari ini","status" : false, })
        fs.writeFileSync('data.json', JSON.stringify(data));
        console.log("data ke i telah di add dari daftar")
    }else if(args1 === 'delete'){
        let deleteData = parseInt(data[3] - 1 );
        data.splice(deleteData,1);
        fs.writeFileSync('data.json', JSON.stringify(data))
        console.log("data ke i telah di hapus dari daftar")
    }else if(args1 === 'complete'){
        console.log("data ke i telah selesai")
    }else if(args1 === 'uncompleted'){
        console.log("data ke i belum selesai")
    }else if(args1 === 'list:outstanding'){
        if(args2 == 'asc'){
            for (let i = 0; i < data.length; i++) {
                if(data[i].complete === false){
                    console.log(`${i+1}.[ ] ${data[i].task_content}`)    
                }   
            }
        }else{
            for (let j = data.length -1 ; j >= 0; j--) {
                if(data[i].complete === false){
                    console.log(`${i+1}.[ ] ${data[i].task_content}`)    
                }
            }
        }
    }else if(args1 === 'list:completed'){
        if(args2 == 'asc'){
            for (let i = 0; i < data.length; i++) {
                if(data[i].complete === true){
                    console.log(`${i+0}.[X] ${data[i].task_content}`)    
                }
            }
        }else{
            for (let j = data.length -1 ; j >= 0; j--) {
                if(data[j].complete === true){
                    console.log(`${j+0}.[X] ${data[j].task_content}`)    
                }
            }
        }
    }else if(args1 === 'filter'){
        console.log("data ke i  yg difilter")
    }else{
        console.log("tag data")
    }
}
