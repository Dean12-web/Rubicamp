import sqlite3 from 'sqlite3';
import { JurusanView } from '../views/jurusan.js';
const db = new sqlite3.Database('./universitas.db');
import Table from 'cli-table3';


// di node js boleh pakai callback
class JurusanController {
    static daftarJurusan(next) {
        const sql = 'SELECT * FROM jurusan';
        db.all(sql, (err, rows) => {
            if (err) throw err;
            JurusanView.daftarJurusan(rows, next)
            // Tutup DB 
            next();
        });
    }
    static cariJurusan(Search_Jurusan, next) {
        const sql = `SELECT * FROM jurusan WHERE Kode_Jurusan LIKE '%${Search_Jurusan}%'`;
        db.all(sql, (err, rows) => {
            if (err) throw err;
            JurusanView.cariJurusan(rows, next)
            next();
        });
    }

    static tampilDB(next){
        const sql2 = 'SELECT * FROM jurusan';
        db.all(sql2, (err, rows) => {
            if (err) throw err;
            JurusanView.tampilDB(rows)
            next()
        });
    }
    static tambahJurusan(Kode_Jurusan, Nama_Jurusan, next) {
        const sql = 'INSERT INTO jurusan (Kode_Jurusan, Nama_Jurusan) VALUES (?, ?)';
        db.run(sql, [Kode_Jurusan, Nama_Jurusan], function (err) {
            if (err) {
                console.error(err.message);
            } else {
                console.log('Jurusan telah ditambahkan ke database');
            }
            next();
        });
    }
    static hapusJurusan(Kode_Jurusan, next) {
        const sql = `DELETE FROM jurusan WHERE Kode_Jurusan = ? `;
        db.run(sql, [Kode_Jurusan], function (err) {
            if (err) {
                console.error(err.message)
            } else {
                console.log(`Data Jurusan ${Kode_Jurusan}, telah dihapus.`);
            }
            next();
        });
    };
}

export { JurusanController }
// JurusanModel.daftarJurusan();
// JurusanModel.cariJurusan();
// JurusanModel.tambahJurusan();
// JurusanModel.hapusJurusan();
