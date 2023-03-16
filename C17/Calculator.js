const PI = 22 / 7;

class Calculator {
    constructor() {
        this.x = 1;
    }

    add(value) {
        this.x += value;
        return this;
    }

    substract(value) {
        this.x -= value;
        return this;
    }

    multiply(value) {
        this.x *= value;
        return this;
    }

    divide(value) {
        this.x /= value;
        return this;
    }

    square() {
        this.x **= 2;
        return this;
    }

    exponent(value) {
        this.x **= value;
        return this;
    }

    squareRoot() {
        this.x = Math.sqrt(this.x);
        return this;
    }

    result() {
        console.log(this.x);
    }
}

export { Calculator, PI }
const hitung = new Calculator
// const result = hitung.multiply(PI).result()

