/*
Prototypes in JS
JS objects have a special property called prototype.

A javaScript object is an entity having state and behavior (properties and method).

We can set prototype using _ _ proto _ _

If object & prototype have same method,
object’s method will be used
 */


// const student={
//     name:"Yash",
//     marks:9.8,
//     printMark:function nami(){
//         console.log("Hui Hui",this.marks);
//     }

// }
// console.log(student.nami());


const employeeobj1={
    // calcTax:function (){
    //     console.log("tax rate is 10%");
    // }
    calcTax(){
        console.log("tax rate is 10%");
    }
}
const karanArjunobj2={
    salary:5500,
    calcTax(){
        console.log("tax rate is 20%");
    }
}
karanArjunobj2.__proto__=employeeobj1;//to use the function of emplyoee object in karan object

console.log(employeeobj1.calcTax());
console.log(karanArjunobj2.calcTax());


