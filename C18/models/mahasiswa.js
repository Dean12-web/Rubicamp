const readline = require('readline');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('../universitas.db');
const Table = require('cli-table');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function line() {
    console.log('===================================================================');
}

function optionMahasiswa() {
    line();
    console.log('Silahkan pilih opsi dibawah ini');
    console.log('[1] Daftar Mahasiswa');
    console.log('[2] Cari Mahasiswa');
    console.log('[3] Tambah Mahasiswa');
    console.log('[4] Hapus Mahasiswa');
    console.log('[5] Kembali');
    line()
}

class Mahasiswa {
    static daftarMahasiswa() {
        const sql = 'SELECT mahasiswa.NIM, mahasiswa.Nama, mahasiswa.Tanggal_Lahir, mahasiswa.Alamat, jurusan.Kode_Jurusan, jurusan.Nama_Jurusan FROM mahasiswa INNER JOIN jurusan ON mahasiswa.Kode_Jurusan = jurusan.Kode_Jurusan';
    
        db.all(sql, (err, rows) => {
            if (err) throw err;
    
            const table = new Table({
                head: ['NIM', 'Nama', 'Tanggal Lahir', 'Alamat', 'Kode Jurusan', 'Nama Jurusan']
            });
    
            rows.forEach((sql) => {
                table.push([sql.NIM, sql.Nama, sql.Tanggal_Lahir, sql.Alamat, sql.Kode_Jurusan, sql.Nama_Jurusan])
            });
    
            console.log(table.toString());
            rl.close();
            db.close();
        });
    }

    static cariMahasiswa() {
        rl.question('Masukkan NIM mahasiswa : ', function (search_mhs) {
            const sql = `SELECT mahasiswa.NIM, mahasiswa.Nama, mahasiswa.Tanggal_Lahir, mahasiswa.Alamat, jurusan.Kode_Jurusan, jurusan.Nama_Jurusan FROM mahasiswa INNER JOIN jurusan ON mahasiswa.Kode_Jurusan = jurusan.Kode_Jurusan WHERE mahasiswa.NIM LIKE '%${search_mhs}%'`;
            db.all(sql, (err, rows) => {
                if (err) throw err;
                if (rows.length > 0){
                        console.log(`Detail mahasiswa dengan NIM '${rows[0].NIM}' :`);
                        console.log(`NIM     : ${rows[0].NIM}`);
                        console.log(`Nama    : ${rows[0].Nama}`);
                        console.log(`Alamat  : ${rows[0].Alamat}`);
                        console.log(`Jurusan : ${rows[0].Kode_Jurusan};`)
                }else{
                        console.log(`Mahasiswa dengan NIM ${search_mhs} tidak terdaftar`);
                }
            });
            rl.close();
            db.close();
        });
    }

    static tambahMahasiswa() {
        rl.question('NIM : ', function(NIM){
            rl.question('Nama :', function(Nama){
                rl.question('Tanggal Lahir :', function(Tanggal_Lahir){
                    rl.question('Alamat :', function(Alamat){
                        rl.question('Kode Jurusan :', function(Kode_Jurusan){
                            const sql = 'INSERT INTO mahasiswa (NIM, Nama, Tanggal_Lahir, Alamat, Kode_Jurusan) VALUES (?,?,date(?),?,?)';
                            db.run(sql,[NIM, Nama, Tanggal_Lahir, Alamat, Kode_Jurusan], function (err){
                                if (err){
                                    console.error(err.message);
                                }else{
                                    console.log('Mahasiswa telah ditambahkan');
                                }
                            });
                            rl.close();
                            db.close();
                        });
                    });
                });
            });
        });
    }

    static hapusMahasiswa() {
        rl.question('Masukkan NIM mahasiswa : ', function(nim){
            const sql = 'DELETE FROM mahasiswa WHERE NIM = ?';
            db.run(sql, [nim], function (err){
                if(err){
                    console.error(err.message);
                }else{
                    console.log(`Data Mahasiswa ${nim} telah dihapus`)
                }
            });
            rl.close();
            db.close();
        });
    }
}


// optionMahasiswa();
Mahasiswa.daftarMahasiswa();
// Mahasiswa.cariMahasiswa();
// Mahasiswa.tambahMahasiswa();
// Mahasiswa.hapusMahasiswa();

