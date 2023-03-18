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

function optionJurusan(){
    line();
    console.log('Silahkan pilih opsi dibawah ini');
    console.log('[1] Daftar Jurusan');
    console.log('[2] Cari Jurusan');
    console.log('[3] Tambah Jurusan');
    console.log('[4] Hapus Jurusan');
    console.log('[5] Kembali');
    line()
}

function daftarJurusan() {
    const sql = 'SELECT * FROM jurusan';
    db.all(sql, (err, rows) => {
        if (err) throw err;
        // Buat Table 
        const table = new Table({
            head: ['Kode Jurusan', 'Nama Jurusan']
        });

        // Tambah rows ke Table
        rows.forEach((sql) => {
            table.push([sql.Kode_Jurusan, sql.Nama_Jurusan])
        });

        // Munculin table di CLI
        console.log(table.toString());

        // Tutup DB dan Readline
        rl.close();
        db.close();
    });
};


function cariJurusan() {
    rl.question('Masukkan Kode Jurusan : ', function(Search_Jurusan){
        const sql = `SELECT * FROM jurusan WHERE Kode_Jurusan LIKE '%${Search_Jurusan}%'`;
        db.all(sql, (err, rows) => {
            if (err) throw err;
            rows.forEach((jurusan) =>{
                console.log('=========================================');
                console.log(`Detail Jurusan dengan Kode '${jurusan.Kode_Jurusan}' :`);
                console.log(`Kode Jurusan : ${jurusan.Kode_Jurusan}`); 
                console.log(`Nama Jurusan : ${jurusan.Nama_Jurusan}`);
            });
        });
        rl.close();
        db.close();
    });
}

function tambahJurusan(){
    rl.question('Kode Jurusan : ', function(Kode_Jurusan){
        rl.question('Nama Jurusan : ', function(Nama_Jurusan){
            const sql = 'INSERT INTO jurusan (Kode_Jurusan, Nama_Jurusan) VALUES (?, ?)';
            db.run(sql, [Kode_Jurusan, Nama_Jurusan], function(err){
                if (err) {
                    console.error(err.message);
                }else {
                    console.log('Jurusan telah ditambahkan ke database');
                }
                rl.close();
                db.close();
            });
        });
    });
}

function hapusJurusan() {
    rl.question('Masukkan Kode Jurusan : ', function(Kode_Jurusan) {
        const sql ='DELETE FROM jurusan WHERE Kode_Jurusan = ? ';
        db.run(sql, [Kode_Jurusan], function (err) {
            if (err) {
                console.error(err.message)
            }else {
                console.log(`Data Jurusan ${Kode_Jurusan}, telah dihapus.`)
            }
            rl.close();
            db.close();
        });
    });
};

// optionJurusan()
// tambahJurusan();
// daftarJurusan();
// cariJurusan();
// hapusJurusan();