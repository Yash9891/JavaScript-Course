//Strings:Immutable -> cannot be changed

let str="Yash";
console.log("Hlo kese ho",str);

console.log(str.length);//print length

console.log(str[3]); //index
let name="GodziLLA"

//Template literals in strings: Way to embedded expression in string using back tick
console.log(`${name.toLowerCase()} is back ${3+2} come here to take his photos ${str.toUpperCase()}`);

let para="        Hlo  kuddoes  how are you hope you are doing  well"
console.log(para.trim());//trim strating and last method


//Slice
let str='012345'
console.log(str.slice(2,4));//not include last index

//Concat
let str1="Apna";
let str2="Godzilla";
console.log(str2.concat(str1));
console.log(str2 + str1);

//Replace
let str="ShivSani";
console.log(str.replace("S","H"));
console.log(str.replaceALl("S","H"));
console.log(str.charAt(3));


//String is immutable we cannot update the string 
let str="ILoveGojira"
str[0]="Y";
console.log(str);

const prompt=require("prompt-sync")({sigint:true});
let fullname=prompt("Enter your name:");
let username=`@${fullname}${fullname.length}`;
console.log(username);

// reverse a string

let str="IamGodzilla"
let rev=" ";
for(let i=0;i<str.length;i++){
      rev=str[i]+rev;
}
console.log(rev);
