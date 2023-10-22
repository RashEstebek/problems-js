class Shape {
    a: number;

    constructor(a: number) {
        this.a = a;
    }
}

// Update it as much as you want, just don't change the name
export class Circle extends Shape {
    area: number;

    constructor(a: number) {
        super(a);
        this.area = a * a * Math.PI;
    }
}

// Update it as much as you want, just don't change the name
export class Rectangle extends Shape {
    area: number;

    constructor(a: number, b: number) {
        super(a);
        this.area = a * b;
    }
}

// Update it as much as you want, just don't change the name
export function sumOfAllAreas(...theArgs: any) {
    let total = 0;
    for (const arg of theArgs) {
        total += arg.area;
    }
    return total;
}

const circle1 = new Circle(2);
const circle2 = new Circle(3);
const rect1 = new Rectangle(2, 4);
const rect2 = new Rectangle(3, 2);

console.log(circle1)
console.log(circle2)
console.log(rect1)
console.log(rect2)

console.log(sumOfAllAreas(circle1, circle2))  // ~ 40. ...
console.log(sumOfAllAreas(circle1, rect1))  // ~ 20. ...