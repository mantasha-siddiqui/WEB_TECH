//settimeout() will accept two parametre (call back function , time internal in milli second)
// setTimeout(()=>{
//   console.log("hello bhai");
// }, 5000);
 //if we have multiple settimeout method , it will work asynchronously 
// console.log("start"); // it will execute seperately , it will not interupt our regular flow
// setTimeout(()=>{
//     console.log("hello bhai1");
//   }, 5000);
//   setTimeout(()=>{
//     console.log("hello bhai2");
//   }, 6000);
//   console.log("middle");
//   setTimeout(()=>{
//     console.log("hello bhai3");
//   }, 8000);
//   setTimeout(()=>{
//     console.log("hello bhai4");
//   }, 7000);
//   setTimeout(()=>{
//     console.log("hello bhai5");
//   }, 2000);
//   console.log("end");

//setinterval() - the syntax is same for both

// setInterval(() => {
//     console.log("hello");
//     console.log("hello1");
// }, 3000); // it will execute repeatedly after every 3 sec

  
//to stop that interval
// let setdata = setInterval(() => {   
//     console.log("hello");
//     console.log("hello1");
// }, 3000); 

// setTimeout(() => {
//     clearInterval(setdata);
// }, 1000);


//promises (promise constructor will accept one cbf and that cbf will accept two parametre(resolve and reject)) 
//here sequence matter (first parametre should be resolve )

let promise = new Promise((resolve , reject) => {

  if(10>30) {      /// here (10<30) is promise
    resolve("promise is resolved");   // if condition is true it will get resolved  // [[Prototype]]: Promise [[PromiseState]]:"fulfilled"[[PromiseResult]]:"promise is resolved"
  }
  else{
    reject("promise is rejected");  // when promise is rejected we are getting error (if we pass 10>30 (condition become false)) 
  }

});

//console.log(promise);   //output is promise object
// promise.then((data) => {
//   console.log(data);
// });             // then method will accept one cbf and this cbf will accept one parametre (data(anything we can take))

//if promise is wrong like 10>30  and to execute this comment out then method then 
// promise.catch((error) => {
//   console.log(error);
// })


// to apply both methods together
promise.then((data) => {
     console.log(data);
   }).catch((error) => {
    console.log(error);
  }).finally(()=>{

  });


//if no action is performed on promise then it is pending
// to handle promise we have 3 methods:-
// 1- then() - whenever promise is resolved we use then() , for accessing the data from server 
//2- catch() - whenever promise is rejected we use catch() , so we get some error so to handle that we have catch()
// 3- finally() - if does not matter promise is resolved or rejected then also we want to perform some operations then we use finally (it is like default)



