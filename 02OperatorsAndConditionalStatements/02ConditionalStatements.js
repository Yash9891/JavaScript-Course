//Conditional Statements
//To implement some condition in the code

//1.If statement

let age=35;
if(age>18){
    console.log("You can vote");
}

let mode ='dark';
let color;
if(mode=='dark'){
    color='black'
}
if(mode=='light'){
    color='white'
}
console.log(color);

//2.If-else statement
let mode ='white';
let color;
if(mode=='dark'){
    color='black'
}else{
    color='white'
}
console.log(color);

// let num= 17;
// if(num % 2===0){
//     console.log(num,"EVen");
// }else{
//     console.log(num,"Odd");
// }


//3.Else if
let mode='pink';
let color;
if(mode==='dark'){
    color='dark'
}
else if(mode==='pink'){
    color='pink'
}
else{
    color='white'
}
console.log(color);


//4.Ternary operator

//condition?if true:if false
let age=16;
(age>=18)?console.log('Adult'):console.log("Not adult");



