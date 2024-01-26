//Promises
//Promise is for evantual completion of task.It is an object in JS.
//It is a solution to callback Hell.
//resolve and reject are callbacks provided by js


let promise =new Promise((resolve,reject)=>{
    console.log("I am a promise");
    // resolve("Success")
    reject("Some err")
})
console.log(promise);


function getData(dataId,getnextdata){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // console.log("data",dataId);
            // resolve("success")
            reject("Error")
            if(getnextdata){
                getnextdata();
            }
    
        },5000)
    })
   
}
let promise=getData(124);
console.log(promise);


const getPromise=()=>{
    return new Promise((resolve,reject)=>{
    console.log("I am a promise");
    resolve("Success")
    // reject("Network Error")

})
}

let promise=getPromise();
promise.then((result)=>{
    console.log("Promise fulfilled",result);
})
promise.catch((error)=>{
    console.log("Rejected",error);

})


//Promise chaining
function asyncFunc1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Some Data1");
            resolve("Success")
        },4000)
})
}
function asyncFunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Some Data2");
            resolve("Success")
        },4000)
})
}
// console.log("Fetching data 1....");
// let p1=asyncFunc1();
// p1.then((result)=>{
//     console.log("Fetching data 2....");
//     let p2=asyncFunc2();
//     p2.then((result)=>{ })

// })

// console.log("Fetching data 1....");
// asyncFunc1().then((result)=>{
//     console.log("Fetching data 2....");
//      asyncFunc2().then((result)=>{ })
// })



/***************************************************** */
function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success")
        },2000)
    })
   
}

getData(1)
.then((res)=>{
    return getData(2)
})
.then((res)=>{
    return getData(3)
}).then((res)=>{
    console.log("Sucess");
})
