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

function optionMataKuliah(){
    line();
    console.log('Silahkan pilih opsi dibawah ini');
    console.log('[1] Daftar Mata Kuliah');
    console.log('[2] Cari Mata Kuliah');
    console.log('[3] Tambah Mata Kuliah');
    console.log('[4] Hapus Mata Kuliah');
    console.log('[5] Kembali');
    line()
}

function daftarMataKuliah() {
    const sql = 'SELECT * FROM mata_kuliah';
    db.all(sql, (err, rows) => {
        if (err) throw err;

        const table = new Table({
            head : ['Kode Mata Kuliah', 'Nama Mata Kuliah', 'sks']
        });

        rows.forEach((sql) => {
            table.push([sql.Kode_Matkul, sql.Nama_Matkul, sql.sks])
        });

        console.log(table.toString());

        rl.close();
        db.close();
    });
}


function cariMataKuliah() {
    rl.question('Masukkan Kode Mata Kuliah : ', function(search_mk){
        const sql = `SELECT * FROM mata_kuliah WHERE Kode_Matkul LIKE '%${search_mk}%'`;
        db.all(sql, (err, rows) => {
            if (err) throw err;
            rows.forEach((matkul) =>{
                line();
                console.log(`Detail Dosen dengan NIP '${matkul.Kode_Matkul}' :`);
                console.log(`NIP : ${matkul.Kode_Matkul}`);
                console.log(`Nama Dosen : ${matkul.Nama_Matkul}`);
            });
        });
        rl.close();
        db.close();
    });
}


function tambahMataKuliah() {
    rl.question('Kode Mata Kuliah : ', function(Kode_Matkul){
        rl.question('Nama Mata Kuliah : ', function(Nama_Matkul){
            rl.question('SKS : ', function(sks){
                const sql = 'INSERT INTO mata_kuliah(Kode_Matkul, Nama_Matkul, sks) VALUES (?, ?, ?)';
                db.run(sql, [Kode_Matkul, Nama_Matkul, sks], function (err) {
                    if (err){
                        console.error(err.message);
                    }else {
                        console.log('Mata Kuliah telah ditambahkan ke database');
                    }
                });
                rl.close();
                db.close();
            });
        });
    });
} 

function hapusMataKuliah() {
    rl.question('Masukkan Kode Mata Kuliah : ', function(kode_mk){
        const sql = 'DELETE FROM mata_kuliah WHERE Kode_Matkul = ?';
        db.run(sql, [kode_mk], function(err){
            if (err){
                console.error(err.message);
            }else{
                console.log(`Data Mata Kuliah ${kode_mk}, telah dihapus.`)
            }
        });
        rl.close();
        db.close();
    });
}
optionMataKuliah()
daftarMataKuliah()
// cariMataKuliah()
// tambahMataKuliah()
// hapusMataKuliah()