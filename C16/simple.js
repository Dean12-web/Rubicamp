class CarFactory {
    constructor() {
        // console.log("Hasil produksi :")
        this.cars = []
    }
    produce(year) {
        for (let i = 1; i <= 3; i++) {
            const makeAgya = new Agya(year);
            this.cars.push(makeAgya.produceAgya());
        }
        for (let i = 1; i <= 3; i++) {
            const makeRush = new Rush(year);
            this.cars.push(makeRush.produceRush());
        }

    }
    result() {
        this.cars.forEach((item, index) => {
            console.log(`no.${index + 1}`)
            console.log(`varian       : ${item.varian}`);
            console.log(`sn           : ${item.sn}`);
            console.log(`door         : ${item.door}`);
            console.log(`seat         : ${item.seat}`);
            console.log(`tyre         : ${item.tyre}`);
            console.log(`year         : ${item.year}`);
            console.log(`warranty     : ${item.warranty} \n`);
        });
    }


    // rumus garansi = tahunpembuatan + umurgaransi
    // jika lebih besar dari garansi active lebih kecil expired

    guaranteeSimulation(simulationYear) {
        console.log(`Hasil simulasi garansi semua mobil pada tahun ${simulationYear} :`)
        this.cars.forEach((item, index) => {
            console.log(`no.${index + 1}`)
            console.log(`varian       : ${item.varian}`);
            console.log(`sn           : ${item.sn}`);
            console.log(`door         : ${item.door}`);
            console.log(`seat         : ${item.seat}`);
            console.log(`tyre         : ${item.tyre}`);
            console.log(`year         : ${item.year}`);
            console.log(`warranty     : ${item.warranty}`);
            console.log(`status on ${simulationYear} this guarantee status is expired \n`)
        });
    }
}

class Car {
    constructor(year, seat, door, warranty, number) {
        this.produceNumber = number
        this.seatProduce = seat,
        this.yearProduce = year,
        this.doorProduce = door,
        this.warrantyProduce = warranty,
        this.tyreProduce = new Tyre()
    }
    generateSerialNumber() {
        const chars = '1234567890abcdefghijklmnopqrstuvwxyz';
        const serialLength = [7, 4, 4, 12];
        let randomSerial = "", randomSerial2 = "", randomSerial3 = "", randomSerial4 = ""
        let randomNumber;
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
        this.seatProduce = [5, 7]
        return this.seatProduce;
    }
    year() {
        return this.yearProduce;
    }
    door() {
        this.doorProduce = 4
        return this.doorProduce;
    }
    number() {
        return this.produceNumber
    }
    tyre() {
        return `${this.tyreProduce.brand()} ${this.tyreProduce.size()} inch`;
    }
    warranty() {
        this.warrantyProduce = Car.generateRandom(1, 5);
        return this.warrantyProduce;
    }
    static generateRandom(min, max) {
        let diffrence = max - min + 1;
        let random = Math.random();
        random = Math.floor(random * diffrence);
        random = random + min;
        return random;
    }
}

class Tyre {
    constructor(brand, size) {
        brand = ['Dunlop', 'Bridgestone'];
        this._brand = brand[Math.floor(Math.random() * 2)]
        size = [15, 17]
        this._size = size[Math.floor(Math.random() * 2)]
    }
    brand() {
        return `${this._brand}`;
    }
    size() {
        return `${this._size}`;
    }
}

class Agya extends Car {
    produceAgya() {
        const obj = {
            // no : this.number(),
            varian: "Agya",
            sn: this.generateSerialNumber(),
            door: this.door(),
            seat: `${this.seat()} seater`,
            tyre: this.tyre(),
            year: this.year(),
            warranty: `${this.warranty()} year`
        }
        return obj
    }
}
class Rush extends Car {
    produceRush() {
        const obj = {
            // no : this.number(),
            varian: "Rush",
            sn: this.generateSerialNumber(),
            door: this.door(),
            seat: `${this.seat()} seater`,
            tyre: this.tyre(),
            year: this.year(),
            warranty: `${this.warranty()} year`
        }
        return obj
    }
}
const toyota = new CarFactory()
toyota.produce(2022)
// toyota.produce(2023)
// toyota.result()
toyota.guaranteeSimulation(2025)