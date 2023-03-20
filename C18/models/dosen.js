const readline = require('readline');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('../universitas.db');
const Table = require('cli-table');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function line(){
    console.log('===================================================================');
}

function optionDosen(){
    line();
    console.log('Silahkan pilih opsi dibawah ini');
    console.log('[1] Daftar Dosen');
    console.log('[2] Cari Dosen');
    console.log('[3] Tambah Dosen');
    console.log('[4] Hapus Dosen');
    console.log('[5] Kembali');
    line()
}

class Dosen {
    static daftarDosen() {
        const sql = 'SELECT * FROM dosen';
        db.all(sql, (err, rows) =>{
            if (err) throw err;
    
            const table = new Table({
                head: ['NIP', 'Nama Dosen']
            });
    
            rows.forEach((sql) => {
                table.push([sql.NIP, sql.Nama_Dosen])
            });
    
            console.log(table.toString());
    
            rl.close();
            db.close();
        });
    }
    
    static cariDosen() {
        rl.question('Masukkan NIP Dosen : ', function(search_dosen){
            const sql = `SELECT * FROM dosen WHERE NIP LIKE '%${search_dosen}%'`;
            db.all(sql, (err, rows) => {
                if (err) throw err;
                rows.forEach((dosen) =>{
                    line();
                    console.log(`Detail Dosen dengan NIP '${dosen.NIP}' :`);
                    console.log(`NIP : ${dosen.NIP}`);
                    console.log(`Nama Dosen : ${dosen.Nama_Dosen}`);
                });
            });
            rl.close();
            db.close();
        });
    }

    static tambahDosen() {
        rl.question('NIP Dosen : ', function(NIP_dosen){
            rl.question('Nama Dosen : ', function(Nama_Dosen){
                const sql = 'INSERT INTO dosen (NIP, Nama_Dosen) VALUES (?, ?)';
                db.run(sql, [NIP_dosen, Nama_Dosen], function(err){
                    if (err) {
                        console.error(err.message);
                    }else {
                        console.log('Dosen telah ditambahkan ke database');
                    }
                });
                rl.close();
                db.close();
            });
        });
    }

    static hapusDosen(){
        rl.question('Masukkan NIP Dosen : ', function(NIP_dosen){
            const sql = 'DELETE FROM dosen WHERE NIP = ?';
            db.run(sql, [NIP_dosen], function (err){
                if (err){
                    console.error(err.message)
                }else {
                    console.log(`Data dosen ${NIP_dosen}, telah dihapus.`)
                }
            });
            rl.close();
            db.close();
        });
    }
}


// optionDosen()
// Dosen.daftarDosen();
// Dosen.cariDosen();
// Dosen.tambahDosen()
// Dosen.hapusDosen()