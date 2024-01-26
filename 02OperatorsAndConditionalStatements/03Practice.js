const prompt=require("prompt-sync")({sigint:true});

// let name=prompt("Enter youer name ")
// console.log("Hello ", name);

// let number =prompt('Enter a number')
// if(number%5==0){
//     console.log(number, "Is multiple of 5");
// }else{
//     console.log("Not a multiple of 5");
// }


let marks=prompt("Enter thr marks: ")
if(marks>=90 && marks<=100){
    console.log("A");
}
else if(marks>=70 && marks<=89){
    console.log("B");

}
else if(marks>=60 && marks<=69){
    console.log("C");

}
else if(marks>=50 && marks<=59){
    console.log("D");

}else if(marks>=0 && marks<=49){
    console.log("F");

}else{
    console.log("Invalid Marks");
}