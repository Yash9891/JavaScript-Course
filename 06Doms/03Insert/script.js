//create the button
let newbtn=document.createElement('button')
newbtn.innerText="click me"
console.log(newbtn);

//isert this buttton
let div=document.querySelector('div')
// div.append(newbtn) //int the div ending
// div.prepend(newbtn)
// div.before(newbtn)  //before the div

//create h2
let h2=document.createElement('h2')
h2.innerHTML="<h1>This is the reason</h1>"
let body=document.querySelector('body')
body.prepend(h2)

//delete the node

let heading1=document.querySelector('h1')
heading1.remove();

//practice questions

let button=document.createElement('button')
button.innerText='click me'
button.style.backgroundColor='red'
button.style.color='white'
let bodi=document.querySelector('body')
bodi.prepend(button)

//create a new class

let para=document.querySelector("p")
para.classList.add('pika2')
console.log(para.classList);

