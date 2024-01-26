/**
 * Classes in JS
Those objects will have some state (variables) & some behaviour (functions) inside it.
Class is a program-code template for creating objects.
class MyClass {
constructor( ) { ... }
myMethod( ) { ... }
}
let myObj = new MyClass( ) ;
 */

//constructor() method is automatically invoked by new and initializes object.
class ToyotaCar{
    constructor(brand,mileage){
        this.brand=brand
        this.mileage=mileage
        console.log("Creating new object");
    }

    start(){//methods
        console.log("Start");
    }
    stop(){
        console.log("Stop");
    }
    setBrand(brand){
        this.brandName=brand;
        
    }

}
let fortuner= new ToyotaCar("Kutta brand");//make new Object(fortuner)
fortuner.setBrand("Fortuner")
console.log(fortuner);
let lexux= new ToyotaCar("TI",67);//make new Object(fortuner)
lexux.setBrand("Lexux")
console.log(lexux);


