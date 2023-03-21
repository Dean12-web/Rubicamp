import { KontrakController } from "../controllers/kontrak.js";

class KontrakModel {
    static daftarKontrak() {
        KontrakController.daftarKontrak();
    }
    static cariKontrak() {
        KontrakController.cariKontrak();
    }
    static tambahKontrak() {
        KontrakController.tambahKontrak();
    }

    static updateNilai() {
        KontrakController.updateNilai();
    }
}

export {KontrakModel}