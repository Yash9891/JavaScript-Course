const prompt=require("prompt-sync")({sigint:true});

let gamenumber=20;
let usernumber=prompt("Enter a number :")

while(usernumber!=gamenumber){
    if(usernumber<gamenumber){
        console.log("Your number is too small");
        usernumber=prompt("guesss again: ")
    }else if(usernumber>gamenumber){
        console.log("Your number is large small");
        usernumber=prompt("guesss again: ")
    }else if(gamenumber==usernumber){
        console.log("You guessed it right");

    }else{
        console.log("In valid input");
    }


}
console.log("Congrulation You entered the right number.");