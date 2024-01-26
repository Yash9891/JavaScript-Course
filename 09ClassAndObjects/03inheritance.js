//Inheritance is passing down properties and methods from parent class to child class.

// class parent{
//     hello(){
//         console.log("Hello I am sinchan");
//     }
// }

// class child extends parent{

// }

// let object= new child;
// console.log(object.hello());


//Access parent properties in the cild

// class Person{
//     constructor(){
//         this.species='homo sapiens'
//         console.log(this.species);
//     }
//     eat(){
//         console.log("Eat");
//     }
//     sleep(){
//         console.log("Sleep");
//     }
//     work(){
//         console.log("Do nothing");
//     }
// }
// class Engineer extends Person{//inherit mehods from parent
//     work(){
//         console.log("Solve problem");
//     }
// }
// class Doctor extends Person{
//     work(){
//         console.log("Treet patient");
//     }
// }

// let yashobj= new Engineer;
// console.log(yashobj.eat());
// console.log(yashobj.work());
// let docObj= new  Doctor;
// console.log(docObj.work());//method overriding
// console.log(docObj.sleep());

//Method overriding:If child and parent have same method then child method will be used.


//Access child properties to the parent
//The super keyword is used to call the constructor of tis parent class to access the parents properties and method
class Person{
    constructor(name){
        console.log("ENter parent constructor");
        this.species='homo sapiens'
        this.name=name
        // console.log(this.species);
        console.log(this.name);
    }
    eat(){
        console.log("Eat");
    }

}
//child class is known as derived class
class Engineer extends Person{//inherit mehods from parent 
    constructor(name){
        // console.log("ENter child constructor");
        super(name);//to invoke parent class constructor
        // this.branch=branch;
        // console.log(branch);
        // console.log("Exit child constructor");
    }
    work(){
        console.log("Solve problem");
    }
}
let engobj=new Engineer("Govilase");
console.log(engobj.work());
