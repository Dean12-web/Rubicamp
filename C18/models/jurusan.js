import { JurusanController } from "../controllers/jurusan.js";

class JurusanModel {
    static daftarJurusan() {
        JurusanController.daftarJurusan();
    }
    static cariJurusan() {
        JurusanController.cariJurusan();
    }
    static tambahJurusan() {
        JurusanController.tambahJurusan();
    }
}

export {JurusanModel}