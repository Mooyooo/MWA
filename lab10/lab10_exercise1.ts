class Car{
    accelaration: number=0;
    constructor(public name:string){}

    honk():void{
        console.log(this.name+" is saying : Toooooooooot!");
    }
    accelarate(speed:number){
        this.accelaration+=speed;
    }
}

let car = new Car('Lambergini');
car.honk();
console.log(car.accelaration);
car.accelarate(60);
console.log(car.accelaration);
