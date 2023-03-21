import { MahasiswaController } from "../controllers/mahasiswa.js";
import { OptionView } from '../views/login.js';

class MahasiswaModel {
    static daftarMahasiswa(next) {
        OptionView.optionMahasiswa();
        MahasiswaController.daftarMahasiswa();
    }
    static cariMahasiswa() {
        OptionView.optionMahasiswa()
        MahasiswaController.cariMahasiswa();
    }
    static tambahMahasiswa() {
        MahasiswaController.tambahMahasiswa();
    }
}

export {MahasiswaModel}