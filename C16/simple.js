class CarFactory {
    constructor () {
        this.cars = []
    }
    produce(year) {
        const makeAgya = new Agya(year);
        this.cars.push(makeAgya.produceAgya())
        console.log(this.cars)
    }
}

class Car {
    constructor(year, seat, door, brand, size) {
        this.seatProduce = seat,
        this.yearProduce = year,
        this.doorProduce = door
        this.tyreProduce = new Tyre(brand,size)
    }
    serialNumber() {
        const chars = '1234567890abcdefghijklmnopqrstuvwxyz';
        const serialLength = [7,4,4,12];
        let randomSerial = "", randomSerial2 = "", randomSerial3 = "",randomSerial4= ""
        let randomNumber
        for (let i = 0; i < serialLength[0]; i++) {
            randomNumber = Math.floor(Math.random() * chars.length);
            randomSerial += chars.substring(randomNumber, randomNumber + 1);
        }
        for (let i = 0; i < serialLength[1]; i++) {
            randomNumber = Math.floor(Math.random() * chars.length);
            randomSerial2 += chars.substring(randomNumber, randomNumber + 1);
        }
        for (let i = 0; i < serialLength[2]; i++) {
            randomNumber = Math.floor(Math.random() * chars.length);
            randomSerial3 += chars.substring(randomNumber, randomNumber + 1);
        }
        for (let i = 0; i < serialLength[3]; i++) {
            randomNumber = Math.floor(Math.random() * chars.length);
            randomSerial4 += chars.substring(randomNumber, randomNumber + 1);
        }  
        return `${randomSerial}-${randomSerial2}-${randomSerial3}-${randomSerial4}`
    }
    seat() {
        this.seatProduce = 5
        return this.seatProduce;
    }
    year() {
        return this.yearProduce;
    }
    door() {
        this.doorProduce = 4
        return this.doorProduce;
    }
    tyre() {
        return this.tyreProduce.brand();
    }
}

class Tyre {
    constructor(brand,size){
        brand = ['dunlop', 'Bridgestone'];
        this._brand = brand[Math.floor(Math.random() * 2)] 
        size = [15,17]
        this._size = size[Math.floor(Math.random() * 2)]
    }
    brand(){
        return `${this._brand} ${this._size} inch`
    }
}

class Agya extends Car {
    produceAgya() {
        const obj = {
            varian      : "Agya",
            sn          : this.serialNumber(),
            door        : this.door(),
            seat        : `${this.seat()} seater`,
            tyre        : this.tyre(),
            year        : this.year(),
            warranty    : '1 year'
        }
        return obj
    }
}

const toyota = new CarFactory()
toyota.produce(2020)