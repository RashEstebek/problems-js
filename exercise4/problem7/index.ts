const is = {
    bool(arg: unknown) {
        if (typeof arg == "boolean") {
            return true
        } else {
            return false
        }
    },
    num(arg: unknown) {
        if (typeof arg == "number") {
            return true
        } else {
            return false
        }
    },
    str(arg: unknown) {
        if (typeof arg == "string") {
            return true
        } else {
            return false
        }
    },
    fun(arg: unknown) {
        if (typeof arg == "function") {
            return true
        } else {
            return false
        }
    },
};

console.log(is.bool(true)); // true
console.log(is.fun(() => {})); //true
console.log(is.fun({})); //false
console.log(is.num(NaN)); //true

export default is;
