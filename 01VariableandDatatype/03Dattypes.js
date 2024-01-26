//Data types in JS

//1. Primitive (7) datatype :Number,String,Boolean,Undefined,Null,BigInt,Symbol
//2. NON-Primitive:Objects-> collection of values (key:value)

let age=90;//number
let str="yash" //string
let isFollow=true; //boolean
let y=null //null
let x; //undefined
let big=BigInt("874858435")
console.log(typeof(age));
console.log(typeof(str));
console.log(typeof(isFollow));
console.log(typeof(y));
console.log(typeof(x));
console.log(big);


//object
const student={
    name:"Kaiko",
    age:12,
    cgpa:8.6,
    isPass:true
}
student['age']=student['age']+1 //update the age
student["name"]="Simran"
console.log(student);
console.log(student.name);
console.log(student.age);

const profile={
    userename:"Yash",
    isFollow:true,
    followers:78
}
console.log(profile);
console.log(typeof (profile["userename"]));
