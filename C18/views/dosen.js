import Table from 'cli-table3';
class DosenView {
    static line() {
        console.log('===================================================================');
    }
    static daftarDosen(rows) {
        const table = new Table({
            head: ['NIP', 'Nama Dosen']
        });
        rows.forEach((sql) => {
            table.push([sql.NIP, sql.Nama_Dosen])
        });
        console.log(table.toString());
    }
    static cariDosen(rows) {
        rows.forEach((dosen) =>{
            DosenView.line();
            console.log(`Detail Dosen dengan NIP '${dosen.NIP}' :`);
            console.log(`NIP : ${dosen.NIP}`);
            console.log(`Nama Dosen : ${dosen.Nama_Dosen}`);
        });
    }
    static tambahDosen(rows) {
    }
}

export {DosenView}