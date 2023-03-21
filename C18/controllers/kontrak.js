import sqlite3 from 'sqlite3';
import { KontrakView } from '../views/kontrak.js';
const db = new sqlite3.Database('./universitas.db');

class KontrakController {
    static daftarKontrak(next) {
        const sql = 'SELECT kontrak.id,kontrak.nim, mahasiswa.nama, mata_kuliah.Nama_Matkul, dosen.nama_dosen, kontrak.nilai FROM kontrak INNER JOIN mahasiswa ON kontrak.NIM = mahasiswa.NIM INNER JOIN mata_kuliah ON kontrak.Kode_Matkul = mata_kuliah.Kode_Matkul INNER JOIN dosen ON kontrak.NIP = dosen.NIP';
        db.all(sql, (err, rows) => {
            if (err) throw err;
            KontrakView.daftarKontrak(rows, next);
            next()
        });
    }
    static cariKontrak(search_kontrak, next) {
        const sql = `SELECT * FROM kontrak WHERE kontrak.NIM LIKE '%${search_kontrak}%'`;
        db.all(sql, (err, rows) => {
            if (err) throw err;
            KontrakView.cariKontrak(rows, next)
            next();
        });
    }

    static tambahKontrak(kontrak_nim, kontrak_mk, kontrak_nip, next) {
        const sql = 'INSERT INTO kontrak(NIM, Kode_Matkul, NIP) VALUES (?, ?, ?)';
        db.run(sql, [kontrak_nim, kontrak_mk, kontrak_nip], function (err) {
            if (err) {
                console.error(err.message);
            } else {
                console.log('Kontrak telah ditambahkan.');
            }
            next();
        });
    }
    static hapusKontrak(id, next) {
        const sql = 'DELETE FROM kontrak WHERE ID = ?';
        db.run(sql, [id], function (err) {
            if (err) {
                console.error(err.message);
            } else {
                console.log(`Data Kontrak dengan ID ${id}, telah dihapus `)
            }
            next();
        });
    }

    static updateNilai(id, nilai, next) {
        const sql = `UPDATE kontrak SET Nilai = ? WHERE id = ?`;
        db.run(sql, [nilai, id], function (err) {
            if (err) {
                console.error(err.message);
            } else {
                console.log('Nilai telah di update');
            }
            next();
        });
    }
}

export { KontrakController }
// Kontrak.daftarKontrak()
// Kontrak.cariKontrak()
// Kontrak.hapusKontrak()
// Kontrak.tambahKontrak()
// Kontrak.updateNilai()