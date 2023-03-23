class OptionView {
    static line() {
        console.log('===================================================================');
    }

    static login(){
        OptionView.line();
        console.log('Welcome to Universitas Pendidikan Indonesia');
        console.log('Jl. Setiabudhi No.255')
        OptionView.line();
    }

    static logout(){
        OptionView.line();
        console.log('Anda telah keluar');
    }

    static mainOption() {
        OptionView.line();
        console.log('Silahkan pilih opsi dibawah ini');
        console.log('[1] Mahasiswa');
        console.log('[2] Jurusan');
        console.log('[3] Dosen');
        console.log('[4] Mata Kuliah');
        console.log('[5] Kontrak');
        console.log('[6] Keluar');
        OptionView.line()
    }

    static optionMahasiswa (){
        OptionView.line();
        console.log('\nSilahkan pilih opsi dibawah ini');
        console.log('[1] Daftar Mahasiswa');
        console.log('[2] Cari Mahasiswa');
        console.log('[3] Tambah Mahasiswa');
        console.log('[4] Hapus Mahasiswa');
        console.log('[5] Kembali');
        OptionView.line()
    }
    static optionJurusan() {
        OptionView.line();
        console.log('\nSilahkan pilih opsi dibawah ini');
        console.log('[1] Daftar Jurusan');
        console.log('[2] Cari Jurusan');
        console.log('[3] Tambah Jurusan');
        console.log('[4] Hapus Jurusan');
        console.log('[5] Kembali');
        OptionView.line()
    }
    static optionDosen() {
        OptionView.line();
        console.log('\nSilahkan pilih opsi dibawah ini');
        console.log('[1] Daftar Dosen');
        console.log('[2] Cari Dosen');
        console.log('[3] Tambah Dosen');
        console.log('[4] Hapus Dosen');
        console.log('[5] Kembali');
        OptionView.line();
    }
    static optionMataKuliah() {
        OptionView.line();
        console.log('\nSilahkan pilih opsi dibawah ini');
        console.log('[1] Daftar Mata Kuliah');
        console.log('[2] Cari Mata Kuliah');
        console.log('[3] Tambah Mata Kuliah');
        console.log('[4] Hapus Mata Kuliah');
        console.log('[5] Kembali');
        OptionView.line();
    }
    static optionKontrak() {
        OptionView.line();
        console.log('\nSilahkan pilih opsi dibawah ini');
        console.log('[1] Daftar Kontrak');
        console.log('[2] Cari Kontrak');
        console.log('[3] Tambah Kontrak');
        console.log('[4] Hapus Kontrak');
        console.log('[5] Update Nilai');
        console.log('[6] Kembali');
        OptionView.line();
    }
}

export {OptionView}
