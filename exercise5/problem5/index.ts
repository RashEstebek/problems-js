async function wait(ms: number) {
    await new Promise((resolve, reject) => {
        if (typeof ms == "number") {
            setTimeout(() => {
                resolve('That\'s correct!');
            }, ms)
        } else {
            reject(new Error('You entered the wrong type'));
        }
    });
}

async function logAsync() {
    await wait(1000);
    console.log("Passed 1 sec");
    await wait(2000);
    console.log("Passed 2 sec");
}

logAsync()
// after 1 sec - Passed 1 sec
// after 2 sec - Passed 2 sec

export default wait;
