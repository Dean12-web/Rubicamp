import Table from 'cli-table3';
class KontrakView {
    static line() {
        console.log('===================================================================');
    }
    static daftarKontrak(rows) {
        const table = new Table({
            head: ['ID', 'NIM', 'Nama', 'Mata Kuliah', 'Dosen', 'Nilai']
        });
        rows.forEach((item) => {
            table.push([item.id, item.NIM, item.Nama, item.Nama_Matkul, item.Nama_Dosen, item.Nilai]);
        });
        console.log(table.toString());
    }

    static tampilKontrak(rows){
        const table = new Table({
            head: ['ID', 'Mata Kuliah','Nilai']
        });
        rows.forEach((item) => {
            table.push([item.id, item.Nama_Matkul, item.Nilai]);
        });
        console.log(table.toString());
    }
    static cariKontrak(rows,search_kontrak) {
        const table = new Table({
            head: ['ID', 'NIM', 'Kode Mata Kuliah', 'NIP', 'Nilai']
        });
        rows.forEach((sql) => {
            table.push([sql.id, sql.NIM, sql.Kode_Matkul, sql.NIP, sql.Nilai])
        })

        if (rows.length > 0) {
            console.log(`Daftar kontrak mahasiswa dengan NIM ${rows[0].NIM} adalah :`)
            console.log(table.toString());
        } else {
            console.log(`Kontrak dengan NIM ${search_kontrak} tidak terdaftar`)
        }
    }
    static tambahKontrak(rows) {
    }
}

export { KontrakView }