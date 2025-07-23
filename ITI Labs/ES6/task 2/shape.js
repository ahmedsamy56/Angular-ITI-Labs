
class Shape {
    constructor() {
        if (this.constructor === Shape) {
            throw new Error("cant take object");
        }
    }
    area() {
        throw new Error('must be implemented');
    }
    parameter() {
        throw new Error('must be implemented');
    }
    toString() {
        return `Area: ${this.area()}, parameter: ${this.parameter()}`;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
    parameter() {
        return 2 * (this.width + this.height);
    }
    toString() {
        return `Rectangle - Area: ${this.area()}, parameter: ${this.parameter()}`;
    }
}

class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }
    area() {
        return this.side * this.side;
    }
    parameter() {
        return 4 * this.side;
    }
    toString() {
        return `Square - Area: ${this.area()}, parameter: ${this.parameter()}`;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
    parameter() {
        return 2 * Math.PI * this.radius;
    }
    toString() {
        return `Circle - Area: ${this.area().toFixed(2)}, parameter: ${this.parameter().toFixed(2)}`;
    }
}

export {Rectangle, Square, Circle };
