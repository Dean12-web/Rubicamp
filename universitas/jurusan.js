const readline = require('node:readline');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('../universitas.db');
const Table = require('cli-table');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
class JurusanModel {
    static daftarJurusan() {
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

            // Tutup DB 
            rl.close()
            db.close();
        });
    };
    static cariJurusan() {
        rl.question('Masukkan Kode Jurusan : ', function (Search_Jurusan) {
            const sql = `SELECT * FROM jurusan WHERE Kode_Jurusan LIKE '%${Search_Jurusan}%'`;
            db.all(sql, (err, rows) => {
                if (err) throw err;
                rows.forEach((jurusan) => {
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

            // Munculin table di CLI
            rl.pause();
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
                        optionJurusan()
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
                rl.close();
                db.close();
            });
        });
    };
}

module.exports = { JurusanModel };
// export default {JurusanModel}
// JurusanModel.daftarJurusan();
// JurusanModel.cariJurusan();
// JurusanModel.tambahJurusan();
// JurusanModel.hapusJurusan();
