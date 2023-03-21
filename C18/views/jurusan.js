import Table from 'cli-table3';

class JurusanView {
    static line() {
        console.log('===================================================================');
    }
    static daftarJurusan(rows) {
        // Buat Table 
        const table = new Table({
            head: ['Kode Jurusan', 'Nama Jurusan']
        });

        // Tambah rows ke Table
        rows.forEach((item) => {
            table.push([item.Kode_Jurusan, item.Nama_Jurusan])
        });

        // Munculin table di CLI
        console.log(table.toString());
    }
    static cariJurusan(rows) {
        rows.forEach((jurusan) =>{
            JurusanView.line();
            console.log(`Detail Jurusan dengan Kode '${jurusan.Kode_Jurusan}' :`);
            console.log(`Kode Jurusan : ${jurusan.Kode_Jurusan}`); 
            console.log(`Nama Jurusan : ${jurusan.Nama_Jurusan}`);
        });
    }
    static tampilDB(rows) {
        const table = new Table({
            head: ['Kode Jurusan', 'Nama Jurusan']
        });

        // Tambah rows ke Table
        rows.forEach((item) => {
            table.push([item.Kode_Jurusan, item.Nama_Jurusan])
        });
        console.log(table.toString());
    }
}

export {JurusanView}