import Table from 'cli-table3';
class MahasiswaView {
    static line() {
        console.log('===================================================================');
    }
    static daftarMahasiswa(rows) {
        const table = new Table({
            head: ['NIM', 'Nama', 'Tanggal Lahir', 'Alamat', 'Kode Jurusan', 'Nama Jurusan']
        });
        rows.forEach((item) => {
            table.push([item.NIM, item.Nama, item.Tanggal_Lahir, item.Alamat, item.Kode_Jurusan, item.Nama_Jurusan])
        });
        console.log(table.toString());
    }
    static cariMahasiswa(rows,search_mhs) {
        if (rows.length > 0) {
            console.log(`Detail mahasiswa dengan NIM '${rows[0].NIM}' :`);
            console.log(`NIM     : ${rows[0].NIM}`);
            console.log(`Nama    : ${rows[0].Nama}`);
            console.log(`Alamat  : ${rows[0].Alamat}`);
            console.log(`Jurusan : ${rows[0].Kode_Jurusan}`)
        } else {
            console.log(`Mahasiswa dengan NIM ${search_mhs}, tidak terdaftar`);
        }
    }
    static tampilMhs(rows) {
        const table = new Table({
            head: ['NIM', 'Nama', 'Tanggal Lahir', 'Alamat', 'Kode Jurusan', 'Nama Jurusan']
        });
        rows.forEach((item) => {
            table.push([item.NIM, item.Nama, item.Tanggal_Lahir, item.Alamat, item.Kode_Jurusan, item.Nama_Jurusan])
        });
        console.log(table.toString());
    }
}

export {MahasiswaView}