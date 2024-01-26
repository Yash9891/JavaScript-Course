//Callback
//A callback is a function passed as an argument to another function.

function sum(a,b){
    console.log(a+b);

}
function cal(a,b,sumCallback){
    sumCallback(a,b)

}
cal(1,2,sum)

const heloo=()=>{
    console.log("Hello");
}
// setTimeout(heloo,3000)//heloo is also a call back in settimeout



//Callback Hell:Nested callbaacks stacked below one another forming a pyramid structure.
//(Pyramid of Doom)

//This style of programming becomes difficult to understand and manage.

function getData(dataId,getnextdata){
    setTimeout(()=>{
        console.log("data",dataId);
        if(getnextdata){
            getnextdata();
        }

    },2000)
   
}

//callback hell
getData(1,()=>{
    getData(2,()=>{
        getData(3)
    })
})



