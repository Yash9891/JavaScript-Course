//Variables are container for data

// age =24
// name ="Tony"
// x=null; //pata hai iske andar kya hai but iske andar aek khali value hai
// y=undefined; //pata hi nhi iske andar kya hai
// isfollow=false;
// console.log(age,name);
// name=78
// console.log(x,y,isfollow);
// console.log(name);

// $name="Gojira"
// _name="Gojira"
// console.log(_name);

//var: Variable can be re-declareed and updated.A global scope variable
//let: Variable cannot be re-declareed but updated.A block scope variable
//const: Variable cannot be re-declareed or updated.A block scope variable

// let name="Superman"
// name="Bodi"
// console.log(name);

const name="Superman"
// name="Bodi" //cannot updated
console.log(name);


//scope
{
    let a=56;
    console.log(a);
}
let a=16;
    console.log(a);