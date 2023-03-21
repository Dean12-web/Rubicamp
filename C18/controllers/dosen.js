import sqlite3 from 'sqlite3';
import { DosenView } from '../views/dosen.js';
const db = new sqlite3.Database('./universitas.db');



class DosenController {
    static daftarDosen(next) {
        const sql = 'SELECT * FROM dosen';
        db.all(sql, (err, rows) => {
            if (err) throw err;
            DosenView.daftarDosen(rows, next)
            next();
        });
    }

    static cariDosen(search_dosen, next) {
        const sql = `SELECT * FROM dosen WHERE NIP LIKE '%${search_dosen}%'`;
        db.all(sql, (err, rows) => {
            if (err) throw err;
            DosenView.cariDosen(rows, next)
            next();
        });
    }

    static tambahDosen(NIP_dosen, Nama_Dosen, next) {
        const sql = 'INSERT INTO dosen (NIP, Nama_Dosen) VALUES (?, ?)';
        db.run(sql, [NIP_dosen, Nama_Dosen], function (err) {
            if (err) {
                console.error(err.message);
            } else {
                console.log('Dosen telah ditambahkan ke database');
            }
            next();
        });
    }

    static hapusDosen(NIP_dosen, next) {
        const sql = 'DELETE FROM dosen WHERE NIP = ?';
        db.run(sql, [NIP_dosen], function (err) {
            if (err) {
                console.error(err.message)
            } else {
                console.log(`Data dosen ${NIP_dosen}, telah dihapus.`)
            }
            next();
        });
    }
}

export { DosenController }
// optionDosen()
// Dosen.daftarDosen();
// Dosen.cariDosen();
// Dosen.tambahDosen()
// Dosen.hapusDosen()