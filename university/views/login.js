const { JurusanModel } = require('../models/jurusan');
const { MahasiswaModel } = require('../models/mahasiswa');
const readline = require('node:readline');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./universitas.db');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


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
                JurusanModel.daftarJurusan(function () {
                    optionJurusan();
                });
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
                MahasiswaModel.daftarMahasiswa(function () {
                    optionMahasiswa()
                });
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
module.exports = { login };