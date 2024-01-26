//Async-Await

//async function always returns a promise.
//await pauses the execution of its surrounding async function until the promise is settled.

async function heloo(){
    console.log("Heloo");
}
heloo()

asynscronous function because its takes 2 sec
function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Whether data");
            resolve(200);
        },2000)
    })
}
async function getWeatherdata(){
    await api()//1st call baki niche ke kaam ruk jayenge phele ye kaam hoga
    await api()//2nd call

}
getWeatherdata()
/** Async is used to perform the task step by step in synchronous way.
 * Async await is used for the work such as to execute the work 1 and then execute the work 2 
 * Normally in asynchronous coding work 1 is execute and  work 2 takes 3 sec to execute but work 3 execute before the work 2 to solve this we use async await to stop the work 3 execution before work 2
 * 
In JavaScript, async and await are used to handle asynchronous code in a more synchronous or readable manner, making it easier to work with promises.
 */


function getData(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            
            console.log("Data is ",data);
            resolve(200)
        },2000)
    })
}
async function alldata(){
    console.log("Getting data 1");
    await getData(1)
    console.log("Getting data 2");
    await getData(2)
    console.log("Getting data 3");
    await getData(3)

}
alldata()
