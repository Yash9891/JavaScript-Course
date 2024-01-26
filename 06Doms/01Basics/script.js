// alert("Godgira")
//Window Object
//The window object represents an open window in a browser.
//It is browser object(not javascritp) and automatically created by browers.
//It is a global object with lots os proerties and methods.

//DOM:-When  a webpage is loaded, the browser creates a Document Object Model of the page.
//we can access the html  in the java script and converted into objects.

// console.dir(window.document)
// console.dir(document.body)
// console.dir(document.body.childNodes[1])

// document.body.childNodes[1].innerText="GoJira is back"

/************************************** */
//Access the lements of html

//1.Selecing with id

// let heading=document.getElementById('heading');
// console.log(heading);

//2.Selecting by class
// let headings=document.getElementsByClassName("heading2")
// console.dir(headings);
// console.log(headings);

//3.SElecting by tags name
// let para=document.getElementsByTagName('p')
// console.dir(para);

//Query Selector
// let elements=document.querySelector('p')//returns first element
// console.dir(elements);

// let allelements=document.querySelectorAll('p')//returns all element
// console.dir(allelements);

// let byclass=document.querySelectorAll('.heading2')//returns all element
// console.dir(byclass);

//Dom manipulation
/*
1.tagname:returns tag for element nodes
2.innerText:returns the text content of the element and all its children
3.innerHTML: return the plain text or Html contents in the element
4.innerContent:returns textual content even for hidden elements
 */


//1.
// let firstel=document.querySelector('p')//returns all element
// console.dir(firstel);
// console.log(firstel);
// console.log(firstel.tagName);


//2.
/**
 Nodes-firstChild and lastChild
 DOM tree:text nodes->comments->elements
 */
// console.dir(document.body.firstChild);
// let div=document.querySelector('div').children;
// console.log(div);

//2 and 3.Innertext and innerHTML
// let div=document.querySelector('div');
// console.dir(div.innerText);//only give text
// console.log(div.innerHTML);//also give html

//update
// console.dir(div.innerText='Kutta');
// console.log(div.innerHTML='<div><h1>Blo blo</h1></div>');

let elements=document.querySelectorAll('.divheading');
console.log(elements.innerText='new heading');
console.log(elements.innerHTML='<h1>Kita</h1>');