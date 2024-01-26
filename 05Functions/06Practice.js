// let arr=[23,56,78,23,90,98,67,91]

// let toppers=arr.filter((val)=>{
//     return val>90;
// })
// console.log(toppers);


const prompt=require("prompt-sync")({sigint:true});
let user= prompt("ENter a number")
arr=[];
for(let i=1;i<=user;i++){
    arr[i-1]=i;
}
let sumofarr=arr.reduce((sum,curr)=>{
    return sum+curr
})
let factofarr=arr.reduce((fact,curr)=>{
    return fact*curr
})
console.log(factofarr);
console.log(sumofarr);
console.log(arr);