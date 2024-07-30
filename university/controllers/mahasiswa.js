const sqlite3 = require('sqlite3').verbose();
const readline = require('node:readline');
const db = new sqlite3.Database('./universitas.db');
const Table = require('cli-table3');

class MahasiswaController {
    static daftarMahasiswa(sql,next) {
        db.all(sql, (err, rows) => {
            if (err) throw err;
            const table = new Table({
                head: ['NIM', 'Nama', 'Tanggal Lahir', 'Alamat', 'Kode Jurusan', 'Nama Jurusan']
            });
            rows.forEach((sql) => {
                table.push([sql.NIM, sql.Nama, sql.Tanggal_Lahir, sql.Alamat, sql.Kode_Jurusan, sql.Nama_Jurusan])
            });
            console.log(table.toString());
            next()
        });
    }

    static cariMahasiswa() {
        rl.question('Masukkan NIM mahasiswa : ', function (search_mhs) {
            const sql = `SELECT mahasiswa.NIM, mahasiswa.Nama, mahasiswa.Tanggal_Lahir, mahasiswa.Alamat, jurusan.Kode_Jurusan, jurusan.Nama_Jurusan FROM mahasiswa INNER JOIN jurusan ON mahasiswa.Kode_Jurusan = jurusan.Kode_Jurusan WHERE mahasiswa.NIM LIKE '%${search_mhs}%'`;
            db.all(sql, (err, rows) => {
                if (err) throw err;
                if (rows.length > 0) {
                    console.log(`Detail mahasiswa dengan NIM '${rows[0].NIM}' :`);
                    console.log(`NIM     : ${rows[0].NIM}`);
                    console.log(`Nama    : ${rows[0].Nama}`);
                    console.log(`Alamat  : ${rows[0].Alamat}`);
                    console.log(`Jurusan : ${rows[0].Kode_Jurusan}`)
                } else {
                    console.log(`Mahasiswa dengan NIM ${search_mhs} tidak terdaftar`);
                }
                optionMahasiswa()
            });
        });
    }

    static tambahMahasiswa() {
        console.log('Lengkapi data di bawah ini : ')
        const sql = 'SELECT mahasiswa.NIM, mahasiswa.Nama, mahasiswa.Tanggal_Lahir, mahasiswa.Alamat, jurusan.Kode_Jurusan, jurusan.Nama_Jurusan FROM mahasiswa INNER JOIN jurusan ON mahasiswa.Kode_Jurusan = jurusan.Kode_Jurusan';
        db.all(sql, (err, rows) => {
            if (err) throw err;
            const table = new Table({
                head: ['NIM', 'Nama', 'Tanggal Lahir', 'Alamat', 'Kode Jurusan', 'Nama Jurusan']
            });
            rows.forEach((sql) => {
                table.push([sql.NIM, sql.Nama, sql.Tanggal_Lahir, sql.Alamat, sql.Kode_Jurusan, sql.Nama_Jurusan])
            });
            rl.pause();
            console.log(table.toString());
            rl.resume();
            rl.question('NIM : ', function (NIM) {
                rl.question('Nama :', function (Nama) {
                    rl.question('Tanggal Lahir :', function (Tanggal_Lahir) {
                        rl.question('Alamat :', function (Alamat) {
                            const sql1 = 'SELECT * FROM jurusan';
                            db.all(sql1, (err, rows) => {
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
                                console.log(table.toString());
                                rl.resume();
                                rl.question('Kode Jurusan :', function (Kode_Jurusan) {
                                    const sql = 'INSERT INTO mahasiswa (NIM, Nama, Tanggal_Lahir, Alamat, Kode_Jurusan) VALUES (?,?,date(?),?,?)';
                                    db.run(sql, [NIM, Nama, Tanggal_Lahir, Alamat, Kode_Jurusan], function (err) {
                                        if (err) {
                                            console.error(err.message);
                                        } else {
                                            console.log('\nMahasiswa telah ditambahkan');
                                            const sql2 = 'SELECT mahasiswa.NIM, mahasiswa.Nama, mahasiswa.Tanggal_Lahir, mahasiswa.Alamat, jurusan.Kode_Jurusan, jurusan.Nama_Jurusan FROM mahasiswa INNER JOIN jurusan ON mahasiswa.Kode_Jurusan = jurusan.Kode_Jurusan';  
                                            db.all(sql2, (err, rows) => {
                                                if (err) throw err;
                                                const table = new Table({
                                                    head: ['NIM', 'Nama', 'Tanggal Lahir', 'Alamat', 'Kode Jurusan', 'Nama Jurusan']
                                                });
                                                rows.forEach((sql) => {
                                                    table.push([sql.NIM, sql.Nama, sql.Tanggal_Lahir, sql.Alamat, sql.Kode_Jurusan, sql.Nama_Jurusan])
                                                });
                                                console.log(table.toString());
                                                optionMahasiswa();
                                            });
                                        }
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    }

    static hapusMahasiswa() {
        rl.question('Masukkan NIM mahasiswa : ', function (nim) {
            const sql = 'DELETE FROM mahasiswa WHERE NIM = ?';
            db.run(sql, [nim], function (err) {
                if (err) {
                    console.error(err.message);
                } else {
                    console.log(`Data Mahasiswa ${nim} telah dihapus`)
                }
                optionMahasiswa();
            });
        });
    }
}

module.exports = { MahasiswaController};
