class Tyre {
    constructor(brand,size){
        brand = ['dunlop', 'Bridgestone'];
        this._brand = brand[Math.floor(Math.random() * 2)] 
        size = [15,17]
        this._size = size[Math.floor(Math.random() * 2)]
    }
}
// const tyre = new Tyre();
// console.log(tyre.result())

class Car {
    constructor(varian, serialNumber, door, seat, year, warranty,brand, size) {
        this.newVarian = varian
        this.newSerialNumber = serialNumber
        this.newDoor = door 
        this.newSeat = seat
        this.newTyre = new Tyre(brand,size)
        this.newYear = year;
        this.newWarranty = warranty
    }

    varian() {
        return this.newVarian;
    }
    serialNumber (){
        return this.newSerialNumber;
    }
    door() {
        return this.newDoor;   
    }
    seat() {
        return this.newSeat;
    }
    tyre() {
        return this.newTyre;
    }  
    year() {
        return this.newYear;   
    }
    warranty() {
        return this.newWarranty;
    }
}

const toyota = new Car('agya', 'sn', 5, 5, 2020, 1)
console.log(toyota.varian())

