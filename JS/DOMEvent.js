
// this is first property by using html attribute
// let section = document.querySelector("section")

// function changeColor(){   // this funstion is used to change the color

//     section.style.backgroundColor = "aqua";

// }

// let changecolor = () => {
//    we can use arrow function also
// }

// let counter = document.querySelector(".counter");  //counter will select whole div

// let count = parseInt(counter.innerText);  // from that counter we want inner text that is 0 (now 0 will come in  string format to convert in number we use parseint)
// console.log(count);
// function increment(){
//     count += 1; 
//     first increment then insert updated value
//     counter.innerText=count;
// }



// function decrement(){
//     count -= 1; 
//     counter.innerText=count;
// }

// function reset(){
//     count = 0;
//     counter.innerText = count;
// }


// let section = document.querySelector("section")

//  function size(){
//  section.style.borderRadius = "50%"
   
//  }
//  function size1(){
//     section.style.borderRadius = ""
      
//     }

// second way is addeventlistener

let section = document.querySelector("section")
let button = document.querySelector("button")
//we can pass multiple event seperately
button.addEventListener("mouseover",() =>{
    section.style.borderRadius = "50%";    //in second method we dont write on in event
});
