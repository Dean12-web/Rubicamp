import Table from 'cli-table3';
class MataKuliahView {
    static line() {
        console.log('===================================================================');
    }
    static daftarMataKuliah(rows) {
        const table = new Table({
            head: ['Kode Mata Kuliah', 'Nama Mata Kuliah', 'sks']
        });
        rows.forEach((item) => {
            table.push([item.Kode_Matkul, item.Nama_Matkul, item.sks])
        });
        console.log(table.toString());
    }
    static cariMataKuliah(rows) {
        rows.forEach((matkul) => {
            MataKuliahView.line();
            console.log(`Detail Mata Kuliah dengan Kode '${matkul.Kode_Matkul}' :`);
            console.log(`Kode Mata Kuliah : ${matkul.Kode_Matkul}`);
            console.log(`Nama Mata Kuliah : ${matkul.Nama_Matkul}`);
        });
    }
    static tambahDosen(rows) {
    }
}

export { MataKuliahView }