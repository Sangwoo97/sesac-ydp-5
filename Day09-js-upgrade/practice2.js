class Shape {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super(width, height);
    }

    getDiagonal() {
        return Math.sqrt(this.width ** 2 + this.height ** 2);
    }
}

class Triangle extends Shape {
    constructor(width, height) {
        super(width, height);
    }

    getArea() {
        return (this.width * this.height) / 2;
    }
}

class Circle extends Shape {
    constructor(width, height, radius) {
        super(width, height);
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius ** 2;
    }
}

const rec = new Rectangle(4, 4);
const tri = new Triangle(4, 4);
const cir = new Circle(4, 4, 4);
console.log(rec.getArea());
console.log(rec.getDiagonal());
console.log(tri.getArea());
console.log(cir.getArea());
