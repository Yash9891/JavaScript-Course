/*
Synchronous :
Synchronous means the code runs in an particular sequence of instructions given in the program.
Each instruction wait for the previous instruction to complete its execution.

*/
// console.log("One");
// console.log("2");
// console.log("3");

/**
 Asyncchronous:
 Due to synchronous progamming, sometimes imp instructions get blocked due to some previous instructions, which causes a delay in the UI.
 Asynchronous code execution allows to execute next instructions immediately and doesnot block the flow.

*/

// function heloo(){
//     console.log("Hello");
// }
// setTimeout(heloo,2000)//timeout it execute the heloo function after 2 sec

//Asynchronous programming
console.log("1");
console.log("2");
setTimeout(function heloo(){
    console.log("Hello");
},4000)
console.log("3");
console.log("4");


