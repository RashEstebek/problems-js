function printNumberInInterval(callback: (n: number) => void) {
    let n = 1;
    const intervalId = setInterval(() => {
        if (n <= 10) {
            callback(n);
            ++n;
        } else {
            clearInterval(intervalId)
        }
        
    }, 1000)
}

function log(n: number) {
    console.log(n);
}

printNumberInInterval(log)
// after 1 sec - 1
// after 1 sec - 2
// after 1 sec - 3
// ...

export default printNumberInInterval;
