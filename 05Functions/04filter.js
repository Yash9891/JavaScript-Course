//Filter method:creates a new array of elemensts that gives true for a condition /filter.
//Eg:all even number

let arr=[1,2,3,4,5,6,7,8]
let evenArr=arr.filter((val)=>{
    return val%2===0;//filter

})
console.log(arr);
console.log(evenArr);