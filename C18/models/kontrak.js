import readline from 'readline';
import sqlite3 from 'sqlite3';
const db = new sqlite3.Database('../universitas.db');
import Table from 'cli-table3';


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

class KontrakModel {
    static daftarKontrak() {
        const sql = 'SELECT kontrak.id,kontrak.nim, mahasiswa.nama, mata_kuliah.Nama_Matkul, dosen.nama_dosen, kontrak.nilai FROM kontrak INNER JOIN mahasiswa ON kontrak.NIM = mahasiswa.NIM INNER JOIN mata_kuliah ON kontrak.Kode_Matkul = mata_kuliah.Kode_Matkul INNER JOIN dosen ON kontrak.NIP = dosen.NIP';
        db.all(sql, (err, rows) => {
            if (err) throw err;

            const table = new Table({
                head: ['ID', 'NIM', 'NIP', 'NIP', 'Kode Matkul', 'Nilai']
            });
            rows.forEach((kontrak) => {
                table.push([kontrak.id, kontrak.NIM, kontrak.Nama, kontrak.Nama_Matkul, kontrak.Nama_Dosen, kontrak.Nilai]);
            });
            const parse = table.toString()
            console.log(parse);
            rl.close();
            db.close();
        });
    }
    static cariKontrak() {
        rl.question('Masukkan NIM mahasiswa : ', function (search_kontrak) {
            const sql = `SELECT * FROM kontrak WHERE kontrak.NIM LIKE '%${search_kontrak}%'`;
            db.all(sql, (err, rows) => {
                if (err) throw err;
                const table = new Table({
                    head: ['ID', 'NIM', 'Kode Mata Kuliah', 'NIP', 'Nilai']
                });
                rows.forEach((sql) => {
                    table.push([sql.id, sql.NIM, sql.Kode_Matkul, sql.NIP, sql.Nilai])
                })

                if (rows.length > 0) {
                    console.log(`Daftar kontrak mahasiswa dengan NIM ${search_kontrak} adalah :`)
                    console.log(table.toString());
                } else {
                    console.log(`Kontrak dengan NIM ${search_kontrak} tidak terdaftar`)
                }
            });
            rl.close();
        })
    }

    static tambahKontrak() {
        console.log('Lengkapi data dibawah ini :');
        // daftarKontrak()
        rl.question('Masukkan NIM : ', function (kontrak_nim) {
            rl.question('Masukkan Kode Mata Kuliah :', function (kontrak_mk) {
                rl.question('Masukkan NIP Dosen : ', function (kontrak_nip) {
                    const sql = 'INSERT INTO kontrak(NIM, Kode_Matkul, NIP) VALUES (?, ?, ?)';
                    db.run(sql, [kontrak_nim, kontrak_mk, kontrak_nip], function (err) {
                        if (err) {
                            console.error(err.message);
                        } else {
                            console.log('Kontrak telah ditambahkan.');
                        }
                    });
                    rl.close();
                    db.close();
                });
            });
        });
    }
    static hapusKontrak() {
        rl.question('Masukkan ID kontrak : ', function (id) {
            const sql = 'DELETE FROM kontrak WHERE ID = ?';
            db.run(sql, [id], function (err) {
                if (err) {
                    console.error(err.message);
                } else {
                    console.log(`Data Kontrak dengan ID ${id}, telah dihapus `)
                }
            });
            rl.close();
            db.close();
        });
    }

    static updateNilai() {
        // daftarKontrak()
        rl.question('Masukan ID yang akan dirubah nilainya : ', (id) => {
            rl.question('Tulis nilai yang baru : ', (nilai) => {
                const sql = `UPDATE kontrak SET Nilai = ? WHERE id = ?`;
                db.run(sql, [nilai, id], function (err) {
                    if (err) {
                        console.error(err.message);
                    } else {
                        console.log('Nilai telah di update');
                    }
                    rl.close();
                    db.close();
                });
            });
        });
    }

}
// Kontrak.daftarKontrak()
// Kontrak.cariKontrak()
// Kontrak.hapusKontrak()
// Kontrak.tambahKontrak()
// Kontrak.updateNilai()