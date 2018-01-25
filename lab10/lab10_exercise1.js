var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
        this.accelaration = 0;
    }
    Car.prototype.honk = function () {
        console.log(this.name + " is saying : Toooooooooot!");
    };
    Car.prototype.accelarate = function (speed) {
        this.accelaration += speed;
    };
    return Car;
}());
var car = new Car('Lambergini');
car.honk();
console.log(car.accelaration);
car.accelarate(60);
console.log(car.accelaration);
