function convertMilliseconds(milliseconds: number) {
    let ms = milliseconds % 1000; // 123456789
    let s = Math.floor(milliseconds / 1000); // 123456
    let m = Math.floor(s / 60); // 2057
    let h = Math.floor(m / 60); // 34

    s = s % 60;
    m = m % 60;
    h = h % 100;
    return { h, m, s, ms };
}

class Timer {
    #timer: {
        h: number,
        m: number,
        s: number,
        ms: number,
    };
    #startTime: number;
    #pausedTime: number;
    #isRunning: boolean;
    #checkDate: number;
    #resetFlag: boolean;

    constructor() {
        this.#timer = {
            h: 0,
            m: 0, 
            s: 0, 
            ms: 0,
        };
        this.#startTime = 0;
        this.#pausedTime = 0;
        this.#isRunning = false;
        this.#checkDate = 0;
        this.#resetFlag = false;
    }

    start() {
        if (!this.#isRunning) {
            this.#isRunning = true;
            this.#startTime = this.#startTime || Date.now();
        }
    }

    pause() {
        if (this.#isRunning) {
            this.#isRunning = false;
            this.#pausedTime = this.#startTime;
        }
    }

    reset() {
        this.#startTime = Date.now();
        this.#pausedTime = 0;
        this.#resetFlag = true;
    }

    log() {
        let currentTime = this.#pausedTime;
        let milliseconds;
        if (this.#isRunning) {
            currentTime = this.#startTime;
        }
        if (!this.#isRunning) {
            milliseconds = this.#checkDate - currentTime;
        } else {
            this.#checkDate = Date.now();
            milliseconds = this.#checkDate - currentTime;
        }
        if (this.#resetFlag === true) {
            milliseconds = 0;
            this.#resetFlag = false;
        }
        this.#timer = convertMilliseconds(milliseconds);
        console.log(this.#timer);
    }
}

const timer = new Timer();

timer.start();
setTimeout(() => {
    timer.log(); // should log -> { h: 0, m: 0, s: 1, ms: 234 }
    timer.pause();
    timer.log(); // should log -> { h: 0, m: 0, s: 1, ms: 234 }
    timer.start();

    setTimeout(() => {
        timer.log(); // should log -> { h: 0, m: 0, s: 3, ms: 221 }
        timer.reset();

        setTimeout(() => {
            timer.log(); // should log -> { h: 0, m: 0, s: 1, ms: 0 }
        }, 1000)
    }, 1987);
}, 1234);

export default Timer;
