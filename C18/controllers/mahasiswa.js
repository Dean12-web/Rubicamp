import sqlite3 from 'sqlite3';
import { MahasiswaView } from '../views/mahasiswa.js';
const db = new sqlite3.Database('./universitas.db');

class MahasiswaController {
    static daftarMahasiswa(next) {
        const sql = 'SELECT mahasiswa.NIM, mahasiswa.Nama, mahasiswa.Tanggal_Lahir, mahasiswa.Alamat, jurusan.Kode_Jurusan, jurusan.Nama_Jurusan FROM mahasiswa INNER JOIN jurusan ON mahasiswa.Kode_Jurusan = jurusan.Kode_Jurusan';
        db.all(sql, (err, rows) => {
            if (err) throw err;
            MahasiswaView.daftarMahasiswa(rows, next);
            next();
        });
    }

    static cariMahasiswa(search_mhs,next) {
        const sql = `SELECT mahasiswa.NIM, mahasiswa.Nama, mahasiswa.Tanggal_Lahir, mahasiswa.Alamat, jurusan.Kode_Jurusan, jurusan.Nama_Jurusan FROM mahasiswa INNER JOIN jurusan ON mahasiswa.Kode_Jurusan = jurusan.Kode_Jurusan WHERE mahasiswa.NIM LIKE ?`;
        db.all(sql, [search_mhs], (err, rows) => {
            if (err) throw err;
            MahasiswaView.cariMahasiswa(rows,search_mhs);
            next();
        });
    }
    static tampilMhs(next){
        const sql1 = 'SELECT mahasiswa.NIM, mahasiswa.Nama, mahasiswa.Tanggal_Lahir, mahasiswa.Alamat, jurusan.Kode_Jurusan, jurusan.Nama_Jurusan FROM mahasiswa INNER JOIN jurusan ON mahasiswa.Kode_Jurusan = jurusan.Kode_Jurusan';
        db.all(sql1, (err, rows) => {
            if (err) throw err;
            MahasiswaView.tampilMhs(rows)
            next()
        });
    }
    static tambahMahasiswa(NIM, Nama, Tanggal_Lahir, Alamat, Kode_Jurusan, next) {
        const sql = 'INSERT INTO mahasiswa (NIM, Nama, Tanggal_Lahir, Alamat, Kode_Jurusan) VALUES (?,?,date(?),?,?)';
        db.run(sql, [NIM, Nama, Tanggal_Lahir, Alamat, Kode_Jurusan], function (err) {
            if (err) {
                console.error(err.message);
            } else {
                console.log('\nMahasiswa telah ditambahkan');
            }
            next()
        });
    }

    static hapusMahasiswa(nim, next) {
        const sql = 'DELETE FROM mahasiswa WHERE NIM = ?';
        db.run(sql, [nim], function (err) {
            if (err) {
                console.error(err.message);
            } else {
                console.log(`Data Mahasiswa ${nim} telah dihapus`)
            }
            next();
        });
    }
}

export { MahasiswaController }
