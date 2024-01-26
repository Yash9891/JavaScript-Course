//Map method:
//Its create a new array with the result of somoe operations. The value its callback returns are used to form new array;
//arr.map(callBackFun(value,index,array))
//it is used to create a new array

let nums=[3,53,4,56];
let newArr=nums.map((val)=>{
    return val*val;//make new array
})
console.log(newArr);