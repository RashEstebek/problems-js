class Name {
    firstName: string;
    lastName: string;
    fullName: string;
    initials: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName.slice(0, 1).toUpperCase() + firstName.slice(1).toLowerCase();
        this.lastName = lastName.slice(0, 1).toUpperCase() + lastName.slice(1).toLowerCase();
        this.fullName = `${this.firstName} ${this.lastName}`;
        this.initials = `${this.firstName.charAt(0).toUpperCase()}.${this.lastName.charAt(0).toUpperCase()}`;
    }
}

const p1 = new Name("john", "SMITH")

console.log(p1.firstName) // "John"
console.log(p1.lastName) // "Smith"
console.log(p1.fullName) // "John Smith"
console.log(p1.initials) // "J.S"

export default Name;
