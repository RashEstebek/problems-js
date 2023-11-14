function printAsyncNumbers(n: number) {
    let counter: number = 1;
    let delay: number = 1000;
    const intervalId = setTimeout(function timer() {
        if (counter <= n) {
            console.log(counter);
            ++counter;
            delay += 1000;
            setTimeout(timer, delay);
        } else {
            clearInterval(intervalId);
        }
        
    }, delay)
}


// printAsyncNumbers(3)
// after 1 sec - 1
// after 2 sec - 2
// after 3 sec - 3

printAsyncNumbers(10)
// after 1 sec - 1
// after 2 sec - 2
// after 3 sec - 3
// ...
// after 10 sec - 10

export default printAsyncNumbers;
