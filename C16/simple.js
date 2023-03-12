class Tyre {
    constructor(){
        const arrBrand = ['dunlop', 'Bridgestone']
        const arrSize  = [15,17]
        this.brand = arrBrand[Math.floor(Math.random() * 2)];
        this.size = arrSize[Math.floor(Math.random() * 2)];
    }
    result() {
        const carBrand = `tyre : ${this.brand} ${this.size} inch`
        return carBrand
    }

}
const tyre = new Tyre();
console.log(tyre.result())

// class Car {
//     constructor(door, seat, serialNumber, year) {
//         this.door = door 
//         this.seat = seat
//         this.serialNumber = serialNumber
//         this.year = year;
//     }

//     door() {
        
//     }

//     seat() {

//     }

//     serialNumber (){

//     }

//     year () {

//     }
// }

