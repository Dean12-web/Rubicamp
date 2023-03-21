import { MataKuliahController } from "../controllers/matakuliah.js";

class MataKuliahModel {
    static daftarMataKuliah() {
        MataKuliahController.daftarDosen();
    }
    static cariMataKuliah() {
        MataKuliahController.cariDosen();
    }
    static tambahMataKuliah() {
        MataKuliahController.tambahDosen();
    }
}

export {MataKuliahModel}