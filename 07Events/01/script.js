/*
Events 

The change in the state of an object is known as event.
Events are fired to notify code of "interesting changes" that may affect code execution.

Mouse events (click, double click etc.)
Keyboard events (keypress, keyup, keydown)
Form events (submit etc.)
Print event & many more

*/

//on dark mode
// let button=document.querySelector('button')
// let body=document.querySelector('body')
// button.onclick=()=>{
//     body.style.backgroundColor='black'
//     body.style.color='white'
// }

// let div= document.querySelector('.d')
// div.onmouseover=(evt)=>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     div.style.fontSize='30px'
// }

//Event Object:
//It is a special object that has details about the  event.
//All event handlers have access to the Event objects properties and methods.


//Event listner
// let button=document.querySelector('button')
// let body=document.querySelector('body')
// button.addEventListener('click',()=>{
//     body.style.backgroundColor='black'
// })



//to remove function
// const removefun=()=>{
//     body.style.color='white'
// }
// button.addEventListener('click',removefun)
// button.removeEventListener('click',removefun)

//Toggle button
// let modebtn=document.querySelector('button')
// let currmode='light';
// let body=document.querySelector('body')
// modebtn.addEventListener('click',()=>{
//     if(currmode==='light'){
//         currmode='dark'
//         modebtn.innerText='Light Mode'
//         body.style.backgroundColor='black';
//     }else{
//         currmode='light'
//         modebtn.innerText='Dark Mode'
//         body.style.backgroundColor='white';
//     }
//     console.log(currmode);
// })


let modebtn=document.querySelector('#mode')
let currmode='light';
let body=document.querySelector('body')
modebtn.addEventListener('click',()=>{
    if(currmode==='light'){
        currmode='dark'
        body.classList.remove('light');
        modebtn.innerText='Light Mode'
        body.classList.add('dark');
    }else{
        currmode='light'
        modebtn.innerText='Dark Mode'
        body.classList.remove('dark');
        body.classList.add('light');
    }
    console.log(currmode);})