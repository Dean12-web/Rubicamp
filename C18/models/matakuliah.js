import readline from 'readline';
import sqlite3 from 'sqlite3';
const db = new sqlite3.Database('../universitas.db');
import Table from 'cli-table3';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// view console log doang

class MatakuliahModel {
    static daftarMataKuliah() {
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

    static cariMataKuliah() {
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

    static tambahMataKuliah() {
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

    static hapusMataKuliah() {
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
}


// optionMataKuliah()
MataKuliah.daftarMataKuliah()
// MataKuliah.cariMataKuliah()
// MataKuliah.tambahMataKuliah()
// MataKuliah.hapusMataKuliah()