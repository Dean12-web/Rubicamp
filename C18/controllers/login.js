import readline from 'node:readline';
import sqlite3 from 'sqlite3';
import { OptionModel } from '../models/login.js';
const db = new sqlite3.Database('./universitas.db');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

class OptionController {
    static login(){
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
                                OptionModel.mainOption()
                            } else {
                                console.log('Incorecct Password, Try again');
                                line()
                                OptionModel.login();
                            }
                        })
                    })
                } else {
                    console.log('username tidak terdaftar');
                    OptionModel.login();
                }
            })
        });
    }

    static mainOption() {
        rl.question('Masukkan salah satu nomor diatas : ', function (getAnswer) {
            switch (getAnswer) {
                case '1':
                    OptionModel.optionMahasiswa();
                    break;
                case '2':
                    // console.log('Ini page jurusan');
                    OptionModel.optionJurusan();
                    break;
                case '3':
                    OptionModel.optionDosen();
                    break;
                case '4':
                    OptionModel.optionMataKuliah();
                    break;
                case '5':
                    OptionModel.optionKontrak();
                    break;
                case '6':
                    OptionModel.logout()
                    break;
            }
        })
    }

    static optionMahasiswa (){
        rl.question('Masukkan salah satu opsi diatas : ', function (getAnswer) {
            switch (getAnswer) {
                case '1':
                    console.log('Ini Daftar Mahasiswa');
                    break;
                case '2':
                    console.log('Ini Cari Mahasiswa');
                    break;
                case '3':
                    console.log('Ini Tambah Mahasiswa');
                    break;
                case '4':
                    console.log('Ini Hapus Mahasiswa');
                    break;
                case '5':
                    OptionModel.mainOption()
                    break;
            }
        })
    }
    static optionJurusan() {
        rl.question('Masukkan salah satu opsi diatas : ', function (getAnswer) {
            switch (getAnswer) {
                case '1':
                    JurusanModel.daftarJurusan()
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
                    OptionModel.mainOption()
                    break;
            }
        })
    }
    static optionDosen() {
        rl.question('Masukkan salah satu opsi diatas : ', function (getAnswer) {
            switch (getAnswer) {
                case '1':
                    console.log('Ini Daftar Dosen');
                    break;
                case '2':
                    console.log('Ini Cari Dosen');
                    break;
                case '3':
                    console.log('Ini Tambah Dosen');
                    break;
                case '4':
                    console.log('Ini Hapus Dosen');
                    break;
                case '5':
                    OptionModel.mainOption()
                    break;
            }
        })
    }
    static optionMataKuliah() {
        rl.question('Masukkan salah satu opsi diatas : ', function (getAnswer) {
            switch (getAnswer) {
                case '1':
                    console.log('Ini Daftar Dosen');
                    break;
                case '2':
                    console.log('Ini Cari Dosen');
                    break;
                case '3':
                    console.log('Ini Tambah Dosen');
                    break;
                case '4':
                    console.log('Ini Hapus Dosen');
                    break;
                case '5':
                    OptionModel.mainOption()
                    break;
            }
        })
    }
    static optionKontrak() {
        rl.question('Masukkan salah satu opsi diatas : ', function (getAnswer) {
            switch (getAnswer) {
                case '1':
                    console.log('Ini Daftar Kontrak');
                    break;
                case '2':
                    console.log('Ini Cari Kontrak');
                    break;
                case '3':
                    console.log('Ini Tambah Kontrak');
                    break;
                case '4':
                    console.log('Ini Hapus Kontrak');
                    break;
                case '5':
                    console.log('Update Nilai')
                    break;
                case '6':
                    OptionModel.mainOption()
                    break;
            }
        })
    }
}

export {OptionController}