function callbackExec(callback: () => void) {
    setTimeout(() => {
        callback();
    }, 2000)
}

function displayHello() {
    console.log('Hello');
}

callbackExec(displayHello); // calls after 2 sec

export default callbackExec;
