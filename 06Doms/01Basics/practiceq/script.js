// let h2=document.querySelector('h2');
// console.dir(h2.innerText);
// h2.innerText=h2.innerText+" From apna College"


let box= document.querySelectorAll('.box')
let idx=1;
for(let div of box){
    // console.log(div.innerText);
    div.innerText=`Gojira is back ${idx}`;
    idx++;
}

// console.log(box[0]);
// box[0].innerText="This is godzilla"
// box[1].innerText="Oho Kong"
// box[2].innerText="I am your daddy Gidhora"