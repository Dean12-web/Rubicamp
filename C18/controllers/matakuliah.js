import sqlite3 from 'sqlite3';
import { MataKuliahView } from '../views/matakuliah.js';

const db = new sqlite3.Database('./universitas.db');

// view console log doang

class MataKuliahController {
    static daftarMataKuliah(next) {
        const sql = 'SELECT * FROM mata_kuliah';
        db.all(sql, (err, rows) => {
            if (err) throw err;
            MataKuliahView.daftarMataKuliah(rows, next)
            next();
        });
    }

    static cariMataKuliah(search_mk, next) {
        const sql = `SELECT * FROM mata_kuliah WHERE Kode_Matkul LIKE '%${search_mk}%'`;
        db.all(sql, (err, rows) => {
            if (err) throw err;
            MataKuliahView.cariMataKuliah(rows, next);
            next();
        });
    }

    static tambahMataKuliah(Kode_Matkul,Nama_Matkul,sks,next) {
        const sql = 'INSERT INTO mata_kuliah(Kode_Matkul, Nama_Matkul, sks) VALUES (?, ?, ?)';
        db.run(sql, [Kode_Matkul, Nama_Matkul, sks], function (err) {
            if (err) {
                console.error(err.message);
            } else {
                console.log('Mata Kuliah telah ditambahkan ke database');
            }
            next();
        });
    }

    static hapusMataKuliah(kode_mk, next) {
        const sql = 'DELETE FROM mata_kuliah WHERE Kode_Matkul = ?';
        db.run(sql, [kode_mk], function (err) {
            if (err) {
                console.error(err.message);
            } else {
                console.log(`Data Mata Kuliah ${kode_mk}, telah dihapus.`)
            }
            next();
        });
    }
}

export { MataKuliahController }
// optionMataKuliah()
// MataKuliah.daftarMataKuliah()
// MataKuliah.cariMataKuliah()
// MataKuliah.tambahMataKuliah()
// MataKuliah.hapusMataKuliah()