//Reduce method

//Perform some operations and reduces the array to a single value.It returns that single value.

//sum
// let arr=[1,2,3,4];
// const output=arr.reduce((previous,current)=>{//prev=1,current=2
//     return previous+current;
// })
// console.log(output);


//print largest number in an array
let arr=[1,2,31,4,7,90];
const output=arr.reduce((previous,current)=>{//prev=1,current=2
    if(previous>current){
        return previous
    }else{
        return current
    }
})
console.log(output);