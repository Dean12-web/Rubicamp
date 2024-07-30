const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./universitas.db');
const Table = require('cli-table3');
const { JurusanController} = require('../controllers/jurusan');



class JurusanModel {
    static daftarJurusan(next) {
        const sql = 'SELECT * FROM jurusan';
        JurusanController.daftarJurusan(sql,next);
    };
    static cariJurusan() {
        JurusanController.cariJurusan()
    }

    static tambahJurusan() {
        console.log('Lengkapi data dibawah ini : ')
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
            rl.pause();
            // Munculin table di CLI
            console.log(table.toString());
            rl.resume();
            rl.question('Kode Jurusan : ', function (Kode_Jurusan) {
                rl.question('Nama Jurusan : ', function (Nama_Jurusan) {
                    const sql = 'INSERT INTO jurusan (Kode_Jurusan, Nama_Jurusan) VALUES (?, ?)';
                    db.run(sql, [Kode_Jurusan, Nama_Jurusan], function (err) {
                        if (err) {
                            console.error(err.message);
                        } else {
                            console.log('Jurusan telah ditambahkan ke database');
                        }
                        // db.close();
                    });
                });
            });
        });
    }

    static hapusJurusan() {
        rl.question('Masukkan Kode Jurusan : ', function (Kode_Jurusan) {
            const sql = 'DELETE FROM jurusan WHERE Kode_Jurusan = ? ';
            db.run(sql, [Kode_Jurusan], function (err) {
                if (err) {
                    console.error(err.message)
                } else {
                    console.log(`Data Jurusan ${Kode_Jurusan}, telah dihapus.`)
                }
            });
        });
    };
}

module.exports = { JurusanModel};