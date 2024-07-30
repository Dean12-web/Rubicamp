const readline = require('node:readline');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./universitas.db');
const Table = require('cli-table3');



const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function line() {
    console.log('===================================================================');
}


function mainOption() {
    line();
    console.log('Silahkan pilih opsi dibawah ini');
    console.log('[1] Mahasiswa');
    console.log('[2] Jurusan');
    console.log('[3] Dosen');
    console.log('[4] Mata Kuliah');
    console.log('[5] Kontrak');
    console.log('[6] Keluar');
    line()
    rl.question('Masukkan salah satu nomor diatas : ', function (getAnswer) {
        switch (getAnswer) {
            case '1':
                optionMahasiswa();
                break;
            case '2':
                // console.log('Ini page jurusan');
                optionJurusan();
                break;
            case '3':
                optionDosen();
                break;
            case '4':
                optionMataKuliah();
                break;
            case '5':
                optionKontrak();
                break;
            case '6':
                logout()
                break;
        }
    })
}

function login() {
    line();
    console.log('Welcome to Universitas Pendidikan Indonesia');
    console.log('Jl. Setiabudhi No.255')
    line();
    rl.question('username: ', function (getusername) {
        const sqlUsername = `SELECT * FROM user WHERE username=?`;
        db.all(sqlUsername, [getusername], (err, username) => {
            if (err) throw err;
            const sqlPasswords = `SELECT * FROM user WHERE password=?`;
            if (username.length > 0) {
                rl.question('password: ', function (getpassword) {
                    db.all(sqlPasswords, [getpassword], (err, password) => {
                        if (err) throw err;
                        if (password.length > 0) {
                            console.log(`Welcome, ${getusername} your acces level is: ADMIN `);
                            mainOption()
                        } else {
                            console.log('Incorecct Password, Try again');
                            line()
                            login();
                        }
                    })
                })
            } else {
                console.log('username tidak terdaftar');
                login();
            }
        })
    });
}
function logout() {
    console.log('Anda telah keluar');
    login();
}
function optionMahasiswa() {
    line();
    console.log('\nSilahkan pilih opsi dibawah ini');
    console.log('[1] Daftar Mahasiswa');
    console.log('[2] Cari Mahasiswa');
    console.log('[3] Tambah Mahasiswa');
    console.log('[4] Hapus Mahasiswa');
    console.log('[5] Kembali');
    line()
    rl.question('Masukkan salah satu opsi diatas : ', function (getAnswer) {
        switch (getAnswer) {
            case '1':
                Mahasiswa.daftarMahasiswa();
                break;
            case '2':
                Mahasiswa.cariMahasiswa();
                break;
            case '3':
                Mahasiswa.tambahMahasiswa();
                break;
            case '4':
                Mahasiswa.hapusMahasiswa();
                break;
            case '5':
                mainOption()
                break;
        }
    })
}
function optionJurusan() {
    line();
    console.log('\nSilahkan pilih opsi dibawah ini');
    console.log('[1] Daftar Jurusan');
    console.log('[2] Cari Jurusan');
    console.log('[3] Tambah Jurusan');
    console.log('[4] Hapus Jurusan');
    console.log('[5] Kembali');
    line()
    rl.question('Masukkan salah satu opsi diatas : ', function (getAnswer) {
        switch (getAnswer) {
            case '1':
                JurusanModel.daftarJurusan();
                break;
            case '2':
                JurusanModel.cariJurusan();
                break;
            case '3':
                JurusanModel.tambahJurusan();
                break;
            case '4':
                JurusanModel.hapusJurusan();
                break;
            case '5':
                mainOption()
                break;
        }
    })
}
function optionDosen() {
    line();
    console.log('\nSilahkan pilih opsi dibawah ini');
    console.log('[1] Daftar Dosen');
    console.log('[2] Cari Dosen');
    console.log('[3] Tambah Dosen');
    console.log('[4] Hapus Dosen');
    console.log('[5] Kembali');
    line();
    rl.question('Masukkan salah satu opsi diatas : ', function (getAnswer) {
        switch (getAnswer) {
            case '1':
                console.log('Ini Daftar Jurusan');
                break;
            case '2':
                console.log('Ini Cari Jurusan');
                break;
            case '3':
                console.log('Ini Tambah Jurusan');
                break;
            case '4':
                console.log('Ini Hapus Jurusan');
                break;
            case '5':
                mainOption()
                break;
        }
    })
}
function optionMataKuliah() {
    line();
    console.log('\nSilahkan pilih opsi dibawah ini');
    console.log('[1] Daftar Mata Kuliah');
    console.log('[2] Cari Mata Kuliah');
    console.log('[3] Tambah Mata Kuliah');
    console.log('[4] Hapus Mata Kuliah');
    console.log('[5] Kembali');
    line()
    rl.question('Masukkan salah satu opsi diatas : ', function (getAnswer) {
        switch (getAnswer) {
            case '1':
                console.log('Ini Daftar Jurusan');
                break;
            case '2':
                console.log('Ini Cari Jurusan');
                break;
            case '3':
                console.log('Ini Tambah Jurusan');
                break;
            case '4':
                console.log('Ini Hapus Jurusan');
                break;
            case '5':
                mainOption()
                break;
        }
    })
}
function optionKontrak() {
    line();
    console.log('\nSilahkan pilih opsi dibawah ini');
    console.log('[1] Daftar Kontrak');
    console.log('[2] Cari Kontrak');
    console.log('[3] Tambah Kontrak');
    console.log('[4] Hapus Kontrak');
    console.log('[5] Update Nilai');
    console.log('[6] Kembali');
    line()
    rl.question('Masukkan salah satu opsi diatas : ', function (getAnswer) {
        switch (getAnswer) {
            case '1':
                console.log('Ini Daftar Jurusan');
                break;
            case '2':
                console.log('Ini Cari Jurusan');
                break;
            case '3':
                console.log('Ini Tambah Jurusan');
                break;
            case '4':
                console.log('Ini Hapus Jurusan');
                break;
            case '5':
                console.log('Update Nilai')
                break;
            case '6':
                mainOption()
                break;
        }
    })
}

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

            optionJurusan();
        });
    };
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
                optionJurusan();
            });
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
            console.log(table.toString());
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
                optionJurusan();
            });
        });
    };
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
            optionMahasiswa();
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
login()
