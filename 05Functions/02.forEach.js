//Method:If a function is associated with an  object then it is called as method 
//Ex: "str".toUpperCase() it only used with array
//Method are like function but we associate it with an object and datastructure
//it is used to calculate or print in original array

//forEach  loop in arrays  :Higher order function :who use functions as a parameter

array.forEach(callBackFunction)//in javascript we can also use as an argumenet

//A callback is a function passed as an argument to another function or return function as an output


let arr=['sima','jita','huasi','pita','fumba']

arr.forEach(function printval(val){
    console.log(val);
})

arr.forEach((val,idx,arr)=>{
    console.log(val.toUpperCase(),idx,arr);
})



//square of val of array

arr=[1,2,3,4,5,6]
let square=(val,idx)=>{
    console.log(val*val);
   
}
arr.forEach(square)
