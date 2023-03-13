class CarFactory {
    constructor() {
        this.cars = []
    }
    produce(year) {
        let car = [];
        let makeAgya = new Agya()
        car.push(makeAgya.produceAgya());
    console.log(car)
    }
    
    guaranteeSimulation(simulationYear){

    }
}

class Car {
    constructor(varian, serialNumber, door, seat, year, brand, size) {
        this.newVarian = varian
        this.newSerialNumber = serialNumber
        this.newDoor = door 
        this.newSeat = seat
        this.newTyre = new Tyre(brand,size)
        this.newYear = year
        this.newWarranty = 2025
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

class Tyre {
    constructor(brand,size){
        brand = ['dunlop', 'Bridgestone'];
        this._brand = brand[Math.floor(Math.random() * 2)] 
        size = [15,17]
        this._size = size[Math.floor(Math.random() * 2)]
    }
}

class Agya extends Car{
    produceAgya(){
        let obj = {
            varian   : "Agya",
            sn       : "randomsn",
            door     : 5,
            seat     : `5 seater`,
            tyre     : `dunlop 15 inch`,
            year     : 2020,
            warranty : `1 year`
        }
        return obj;
    }
}

let toyota = new CarFactory();
toyota.produce()
function randomSn() {
    var chars = '1234567890abcdefghijklmnopqrstuvwxyz',
    serialLength = 7,
    randomSerial = "",
    i,
    randomNumber;
    for (i = 0; i < serialLength; i = i + 1) {
        randomNumber = Math.floor(Math.random() * chars.length);
        randomSerial += chars.substring(randomNumber, randomNumber + 1);
    }
    var serialLength1 = 4,
    randomSerial1 = ""
    for (i = 0; i < serialLength1; i = i + 1) {
        randomNumber = Math.floor(Math.random() * chars.length);
        randomSerial1 += chars.substring(randomNumber, randomNumber + 1);
    }
    var serialLength2 = 4,
    randomSerial2 = ""
    for (i = 0; i < serialLength2; i = i + 1) {
        randomNumber = Math.floor(Math.random() * chars.length);
        randomSerial2 += chars.substring(randomNumber, randomNumber + 1);
    }
    var serialLength3 = 4,
    randomSerial3 = ""
    for (i = 0; i < serialLength3; i = i + 1) {
        randomNumber = Math.floor(Math.random() * chars.length);
        randomSerial3 += chars.substring(randomNumber, randomNumber + 1);
    }
    var serialLength4 = 12,
    randomSerial4 = ""
    for (i = 0; i < serialLength4; i = i + 1) {
        randomNumber = Math.floor(Math.random() * chars.length);
        randomSerial4 += chars.substring(randomNumber, randomNumber + 1);
    }
    return `${randomSerial}-${randomSerial1}-${randomSerial2}-${randomSerial3}-${randomSerial4}  `;
}

