//implicit typecasting
console.log(10+10);//20
console.log(10+"10");//1010 here if add is not possible then concatenation will work
console.log(10-"10");//0 here if subtraction is not possible it will convert it into number
console.log("10"*10);//100
console.log("10"+ +10);//1010
console.log("10"- +10);//0
console.log("10"- -10);//20
console.log(10- -"10");//20
console.log(10-"");//10
console.log(10+"");//10
console.log(10-"a");//NaN (not a number)
console.log(10+ true);//11
console.log(10+false);//10
console.log("10"+ -10);//10-10
console.log(false + "false");//falsefalse
console.log(false - "false");//NaN

//explicit typecasting
//console.log(10 + Boolean("")); //empty space is false output
//console.log(10 + Boolean("Aa")); //if we give any data then it is true

//let a = prompt("enter your graduation percentage");
//let b = prompt("enter your 12  percentage");
//console.log(parseInt(a) + parseInt(b)); //parseInt will  consider integer value and (for float value or integer also use "parseFloat")


// let a1 = 20 ;
// console.log(a1>50? "true" : "false");

// let value = Number(prompt("enter your original age"));
// switch (true) {
//     case value<15:
//         console.log("got to school");
//         break;
//     case value<18:
//         console.log("got to college");
//         break;
//     default:
//         console.log("default block is excuted");
//         break;
// }

// function fun(a,b,c){
//     console.log(a,b,c);
// }
// fun(10,20,30);
// fun(40,80);//undefined-(default value)

// (function name(){
//     console.log("hello")
// }());//invoke so to remove this error we wrap the whole code in paranthesis but we cannot call this function it will show error
//  (ex-we login only one time when we again visit that page we need not to login again and also example of cookies).

// function parent() {
//     let a = 10;
//     function child() { //nested function
//         let b = 20;
//         console.log(a, b);
        
//     }
//     child();//calling child function inside parent function
    
// }
// parent();//calling parent function

//EXECUTION OF THIS CODE- 1st method of nested function
//when we pass our file in JS engine , GEC (global execution context) is created only one time inside call stack.
//in GEC(anonymous)we have two phase:- declaration and execution (initialization comes under execution)phase 
//whenever any function is declared a memory is created in heap area and its object reference is stored in declaration phase 
//whenever any function comes into execution then one execution context is created.
//once the execution of function is completion then execution part will removed from call stack.
//call stack is following LIFO principle.

function parent() {
        let a = 10;
       return function child() { //nested function
            let b = 20;
             console.log(a, b);
             return function gchild(){
                let c = 30;
                console.log(a,b,c);
             };
             };
        
    }
     parent()()();



