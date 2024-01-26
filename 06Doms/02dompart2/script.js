//Attributes
/**
 1. getAttribute(arr) to get the attribute value
 1. setAttribute(arr) to set the attribute value
 */

 //get the attribute
 let div= document.querySelector('div')
 console.log(div);
console.log(div.getAttribute('id'));
console.log(div.getAttribute('name'));

let para=document.querySelector('p')
console.log(para.getAttribute('class'))
console.log(para.setAttribute('class','newclass'))


///************style ***************/
let div= document.querySelector('div')
div.style.backgroundColor='red'
div.style.color='white'
div.style.fontSize='20px';
