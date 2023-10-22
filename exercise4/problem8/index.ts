class Calculator {
    num: number;

    constructor(num: number) {
        this.num = num;
    }

    add(otherNum: number): Calculator {
        this.num += otherNum;
        return this
    }

    subtract(otherNum: number): Calculator {
        this.num -= otherNum;
        return this
    }

    divide(otherNum: number): Calculator {
        this.num /= otherNum;
        return this
    }

    multiply(otherNum: number): Calculator {
        this.num *= otherNum;
        return this
    }

    logResult(): Calculator {
        console.log(this.num);
        return this
    }
}

const calc = new Calculator(10);

calc
    .add(10)
    .subtract(5)
    .divide(5)
    .multiply(3)
    .logResult() // logs: 9
    .add(2)

export default Calculator;
