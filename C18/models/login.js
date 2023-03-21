import { OptionController } from '../controllers/login.js';
import { OptionView } from '../views/login.js';

class OptionModel {
    static login() {
        OptionView.login();
        OptionController.login();
    }
    static logout() {
        OptionView.logout();
        OptionModel.login();
    }
    static mainOption() {
        OptionView.mainOption();
        OptionController.mainOption();
    
    }
    static optionMahasiswa() {
        OptionView.optionMahasiswa();
        OptionController.optionMahasiswa();
    }
    static optionJurusan() {
        OptionView.optionJurusan();
        OptionController.optionJurusan();
    }
    static optionDosen() {
        OptionView.optionDosen();
        OptionController.optionDosen()
    }
    static optionMataKuliah() {
        OptionView.optionMataKuliah()
        OptionController.optionMataKuliah();
    }
    static optionKontrak() {
        OptionView.optionKontrak()
        OptionController.optionKontrak()
    }
}

export {OptionModel}
