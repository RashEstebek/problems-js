class Person {
    #name: string;
    #age: number;

    constructor(name: string, age: number) {
        this.#name = name;
        this.#age = age;
    }

    compareAge(person: Person) {
        if (person.#age > this.#age) {
            return `${person.#name} is older than me.`
        } else if (person.#age < this.#age) {
            return `${person.#name} is younger than me.`
        } else return `${person.#name} is the same age as me.`
    }
}

const p1 = new Person("Samuel", 24)
const p2 = new Person("Joel", 36)
const p3 = new Person("Lily", 24)

p1.compareAge(p2) // "Joel is older than me."
p2.compareAge(p1) // "Samuel is younger than me."
p1.compareAge(p3) // "Lily is the same age as me."

export default Person;
