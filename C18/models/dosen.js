import { DosenController } from "../controllers/dosen.js";



class DosenModel {
    static daftarDosen() {
        DosenController.daftarDosen();
    }
    static cariDosen() {
        DosenController.cariDosen();
    }
    static tambahDosen() {
        DosenController.tambahDosen();
    }
}

export {DosenModel}