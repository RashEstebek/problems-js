interface Shape {
    getArea(): number;
}

// Update it as much as you want, just don't change the name
export class Circle implements Shape {
    area: number;

    constructor(a: number) {
        this.area = a * a * Math.PI;
    }

    getArea() {
        return this.area;
    }
}

// Update it as much as you want, just don't change the name
export class Rectangle implements Shape {
    area: number;

    constructor(a: number, b: number) {
        this.area = a * b;
    }

    getArea() {
        return this.area;
    }
}

// Update it as much as you want, just don't change the name
export function sumOfAllAreas(...theArgs: any) {
    let total = 0;
    for (const arg of theArgs) {
        total += arg.getArea();
    }
    return total;
}

const circle1 = new Circle(2);
const circle2 = new Circle(3);
const rect1 = new Rectangle(2, 4);
const rect2 = new Rectangle(3, 2);

console.log(sumOfAllAreas(circle1, circle2))  // ~ 40. ...
console.log(sumOfAllAreas(circle1, rect1))  // ~ 20. ...
console.log(sumOfAllAreas(circle1, rect2))
