//Loops

//Loops are used to execute a piece of code again and again

const prompt=require("prompt-sync")({sigint:true});

//.for loop
// for(let i=1;i<=5;i++){
//     console.log("Godzilla your are awesome");
// }
// console.log('loop ended');

// calculate sum of 1 to n
// let n=prompt("ENter a number: ")
// let sum=0;
// for(let i=1;i<=n;i++){
//     sum=sum+i;
// }
// console.log(sum);

//2.Infinite length ->a loop that never ends

//3.While loop
// let i=1;
// while(i<=5){
//     console.log(i);
//     i++;
// }

//4.Do while loop
//It runs at least one time because condition check after the execution

// let i=1;
// do{
//     console.log("Anpna Godjira");
//     i++;
// }while(i<=5);


// some other special loop for array and strings

//1.for-of loop

// let length=0;
// let str="Godzilla";
// for(let i of str){//iterator
//     console.log(i);
//     length++;
// }
// console.log("Length of string ",length);


//2.for-in loop ->used in object (return keys) and array
// let student ={
//     name:"Gamiko",
//     age:45,
//     iPass:true

// }
// for( let key in student){
//     console.log(key, student[key]);
// }

//Print even number
for(let i=1;i<=100;i++){
    if(i%2==0){
        console.log(i);
    }
}
