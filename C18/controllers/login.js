import readline from 'node:readline';

import sqlite3 from 'sqlite3';
import { OptionModel } from '../models/login.js';

import { OptionView } from '../views/login.js';
import { DosenController } from './dosen.js';
import { JurusanController } from './jurusan.js';
import { KontrakController } from './kontrak.js';
import { MahasiswaController } from './mahasiswa.js';
import { MataKuliahController } from './matakuliah.js';




const db = new sqlite3.Database('./universitas.db');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

class OptionController {
    static login() {
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

    static optionMahasiswa() {
        rl.question('Masukkan salah satu opsi diatas : ', function (getAnswer) {
            switch (getAnswer) {
                case '1':
                    MahasiswaController.daftarMahasiswa(() => {
                        OptionView.optionMahasiswa();
                        OptionController.optionMahasiswa();
                    });
                    break;
                case '2':
                    rl.question('Masukkan NIM mahasiswa : ', function (search_mhs) {
                        MahasiswaController.cariMahasiswa(search_mhs, function () {
                            OptionView.optionMahasiswa();
                            OptionController.optionMahasiswa();
                        });
                    });
                    break;
                case '3':
                    console.log('Lengkapi data di bawah ini : ')
                    rl.question('NIM : ', function (NIM) {
                        rl.question('Nama :', function (Nama) {
                            rl.question('Tanggal Lahir :', function (Tanggal_Lahir) {
                                rl.question('Alamat :', function (Alamat) {
                                    rl.question('Kode Jurusan :', function (Kode_Jurusan) {
                                        MahasiswaController.tambahMahasiswa(NIM,Nama,Tanggal_Lahir,Alamat,Kode_Jurusan,()=>{
                                            OptionView.optionMahasiswa();
                                            OptionController.optionMahasiswa();
                                        })
                                    });
                                });
                            });
                        });
                    });
                    break;
                case '4':
                    rl.question('Masukkan NIM mahasiswa : ', function (nim) {
                        MahasiswaController.hapusMahasiswa(nim, () => {
                            OptionView.optionMahasiswa();
                            OptionController.optionMahasiswa();
                        });
                    });
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
                    JurusanController.daftarJurusan(function () {
                        OptionView.optionJurusan();
                        OptionController.optionJurusan();
                    });
                    break;
                case '2':
                    rl.question('Masukkan Kode Jurusan : ', function (Search_Jurusan) {
                        JurusanController.cariJurusan(Search_Jurusan, function () {
                            OptionView.optionJurusan();
                            OptionController.optionJurusan();
                        });
                    });
                    break;
                case '3':
                    console.log('Lengkapi data dibawah ini : \n');
                    JurusanController.tampilDB(()=>{
                        rl.question('Kode Jurusan : ', function (Kode_Jurusan) {
                            rl.question('Nama Jurusan : ', function (Nama_Jurusan) {
                                JurusanController.tambahJurusan(Kode_Jurusan, Nama_Jurusan, () => {
                                    OptionView.optionJurusan();
                                    OptionController.optionJurusan();
                                })
                            });
                        });
                    })
                    break;
                case '4':
                    rl.question('Masukkan Kode Jurusan : ', function (Kode_Jurusan) {
                        JurusanController.hapusJurusan(Kode_Jurusan, function () {
                            OptionView.optionJurusan();
                            OptionController.optionJurusan();
                        })
                    });
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
                    DosenController.daftarDosen(() => {
                        OptionView.optionDosen();
                        OptionController.optionDosen();
                    });
                    break;
                case '2':
                    rl.question('Masukkan NIP Dosen : ', function (search_dosen) {
                        DosenController.cariDosen(search_dosen, () => {
                            OptionView.optionDosen();
                            OptionController.optionDosen();
                        });
                    });
                    break;
                case '3':
                    console.log('Lengkapi data dibawah ini : \n')
                    rl.question('NIP Dosen : ', function (NIP_dosen) {
                        rl.question('Nama Dosen : ', function (Nama_Dosen) {
                            DosenController.tambahDosen(NIP_dosen, Nama_Dosen, () => {
                                OptionView.optionDosen();
                                OptionController.optionDosen();
                            })
                        });
                    });
                    break;
                case '4':
                    rl.question('Masukkan NIP Dosen : ', function (NIP_dosen) {
                        DosenController.hapusDosen(NIP_dosen, () => {
                            OptionView.optionDosen();
                            OptionController.optionDosen();
                        })
                    });
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
                    MataKuliahController.daftarMataKuliah(() => {
                        OptionView.optionMataKuliah();
                        OptionController.optionMataKuliah();
                    })
                    break;
                case '2':
                    rl.question('Masukkan Kode Mata Kuliah : ', function (search_mk) {
                        MataKuliahController.cariMataKuliah(search_mk, () => {
                            OptionView.optionMataKuliah();
                            OptionController.optionMataKuliah();
                        })
                    });
                    break;
                case '3':
                    console.log('Lengkapi data dibawah ini : \n');
                    rl.question('Kode Mata Kuliah : ', function(Kode_Matkul){
                        rl.question('Nama Mata Kuliah : ', function(Nama_Matkul){
                            rl.question('SKS : ', function(sks){
                                MataKuliahController.tambahMataKuliah(Kode_Matkul,Nama_Matkul,sks,()=>{
                                    OptionView.optionMataKuliah();
                                    OptionController.optionMataKuliah();
                                })
                            });
                        });
                    });
                    break;
                case '4':
                    rl.question('Masukkan Kode Mata Kuliah : ', function (kode_mk) {
                        MataKuliahController.hapusMataKuliah(kode_mk, () => {
                            OptionView.optionMataKuliah();
                            OptionController.optionMataKuliah();
                        })
                    });
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
                    KontrakController.daftarKontrak(() => {
                        OptionView.optionKontrak();
                        OptionController.optionKontrak();
                    })
                    break;
                case '2':
                    rl.question('Masukkan NIM mahasiswa : ', function (search_kontrak) {
                        KontrakController.cariKontrak(search_kontrak, function () {
                            OptionView.optionKontrak();
                            OptionController.optionKontrak();
                        })
                    })
                    break;
                case '3':
                    console.log('Lengkapi data dibawah ini :');
                    // daftarKontrak()
                    rl.question('Masukkan NIM : ', function (kontrak_nim) {
                        rl.question('Masukkan Kode Mata Kuliah :', function (kontrak_mk) {
                            rl.question('Masukkan NIP Dosen : ', function (kontrak_nip) {
                                KontrakController.tambahKontrak(kontrak_nim,kontrak_mk,kontrak_nip,()=>{
                                    OptionView.optionKontrak();
                                    OptionController.optionKontrak();
                                })
                            });
                        });
                    });
                    break;
                case '4':
                    rl.question('Masukkan ID kontrak : ', function (id) {
                        KontrakController.hapusKontrak(id, () => {
                            OptionView.optionKontrak();
                            OptionController.optionKontrak();
                        })
                    });
                    break;
                case '5':
                    rl.question('Masukan ID yang akan dirubah nilainya : ', (id) => {
                        rl.question('Tulis nilai yang baru : ', (nilai) => {
                            KontrakController.updateNilai(id, nilai, () => {
                                OptionView.optionKontrak();
                                OptionController.optionKontrak();
                            });
                        });
                    });
                    break;
                case '6':
                    OptionModel.mainOption()
                    break;
            }
        })
    }
}

export { OptionController }