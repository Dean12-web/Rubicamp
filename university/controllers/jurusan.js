const sqlite3 = require('sqlite3').verbose();
const readline = require('node:readline');
const db = new sqlite3.Database('./universitas.db');
const Table = require('cli-table3');
class JurusanController {
    static daftarJurusan(sql, next){
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
            next()
        });
    }
    static cariJurusan() {
        rl.question('Masukkan Kode Jurusan : ', function (Search_Jurusan) {
            const sql = `SELECT * FROM jurusan WHERE Kode_Jurusan LIKE '%${Search_Jurusan}%'`;
            db.all(sql, (err, rows) => {
                if (err) throw err;
                if (rows.length > 0) {
                    console.log(`Detail Jurusan dengan Kode '${rows[0].Kode_Jurusan}' :`);
                    console.log(`Kode Jurusan     : ${rows[0].Kode_Jurusan}`);
                    console.log(`Nama Jurusan     : ${rows[0].Nama_Jurusan}`);
                } else {
                    console.log(`Jurusan dengan kode ${Search_Jurusan} tidak terdaftar`);
                }
            });
        });
    }
}


module.exports = { JurusanController};