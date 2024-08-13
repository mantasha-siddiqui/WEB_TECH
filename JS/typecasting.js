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
// }());//invoke so to remove this error we wrap the whole code in paranthesis but we cannot call this function again. it will show error
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

// function parent() {
//         let a = 10;
//        return function child() { //nested function
//             let b = 20;
//              console.log(a, b);
//              return function gchild(){
//                 let c = 30;
//                 console.log(a,b,c);
//              };
//              };
        
//     }
//      parent()()();

   // let a = () => {  //arrow function
   //    console.log("hello");
   // };

   // a();

// function hoc(a){
//    console.log(a);
// }

// function head(){
//    console.log("hello")     

// }
// hoc(head)// a function which is accepting another function as an argument that function is called higher order function
         //(here head is a function and hoc is also a function) hoc(higher order function)
// a function which is passed to another function as an argument that function is called as call back function head(call back function)


//  function fun(){
//     console.log(this) //(in all the function )inside a function this keyword will refer to window object
//  }
//   fun();


//internally a class is created for every function, every function is a JS class
// to overcome this ... (like when we write this.a it gives 3 ... so to overcome this , fix the error and it will create constructor)

// let a = function (){
//    console.log(this);
// };
// a(); anonymousfunction

//whenever we are fetching data from backend it will come in the form of array of objects

// let emp1={
//    empName:"tinku",
//    empId:10,
//    salary:20000,
//    age:30,
// };
// let emp2={
//    empName:"tinki",
//    empId:20,
//    salary:30000,
//    age:25,
// };
// let emp3={
//    empName:"pinku",
//    empId:30,
//    salary:50000,
//    age:27,
// };
// let emp4={
//    empName:"dinki",
//    empId:40,
//    salary:60000,
//    age:23,

// };



// function printData(a,b,c){
//    console.log(this.empName)
//    console.log(this.empId)
//    console.log(this.salary)
//    console.log(this.age)
// }

// console.log(printData.call(emp1,10,20,30)); // in call method first one is object and remaining are arguments (syntax(object , extra argument))
//for binding particular function with object we perform call binding.
//with the help of call method we can perform binding
//printData.call(emp1)

//printData.call(emp2)

//  console.log(printData.apply(emp2,[10,20,30]));//in apply, to pass extra argument we need to wrap that in array[] otherwise it will give error
//for apply if we pass only object output will come 
//call and apply method will not return anything(undefined) to do this use console.log . 
//bind will return method bound(already binded) function 

//console.log(printData.bind(emp3)()); //(we can pass extra argument) 
//in bind method it will return function so to call bind function write ()in the end 


// function* generator(ac) {
//    yield ac+10;
//    yield ac+20;
//    yield ac+30;
//    yield ac+40;
// }

// let ab = generator(10); // store calling function in one variable
// console.log(ab);
// console.log(ab.next().value);
// console.log(ab);
// console.log(ab.next().value);
// console.log(ab);
// console.log(ab.next().value);
// console.log(ab); 
// console.log(ab.next().value);


const arr =  [10,20,30,40,8,9,54,87,83];
arr.push(100); // insert at the end
console.log(arr.unshift(90)); // insert at starting
console.log(arr.pop());
console.log(arr.length); // it is a property it find length of array 
console.log(arr.shift());
console.log(arr.indexOf(30));
console.log(arr.lastIndexOf(30));
console.log(arr.includes(30));  // return type of includes is boolean
console.log(arr.at(3)); // we pass the index value
console.log(arr.slice(2,6)); // it will accept two parametre (first index ,last index) but it will excludes the last index pass extra index (as it include)
console.log(arr) // slice method will not affect the existing array
console.log(arr.splice(2,7,100,100,100)); // (starting index , length , replacable items)
console.log(arr)  
// difference between slice and splice
// 1-syntax is different, 2-we can replace the element in splice  3 - slice will not affect the existing array 
console.log(typeof(arr.join("")));  // if we pass ""(empty string) with that it will not give space 
// typeof will check the type of datatype (in output it will give string) 

const arr1 = [10,20,30];
const arr2 = [40,50,60];
console.log(arr1.concat(arr2)); // if we want to pass multiple array then (pass as much array u want)
console.log(arr)  // it will not affect existing array (it will concat them and give new array)
console.log(arr.reverse()); // it will reverse an array
console.log(arr.sort((a,b)=>a-b)); // we will call comparable funstion inside sort (it will sort the array in ascending order) , we we want b-a (descending order)
console.log(arr) // sort method is sorting bitwise (like 1st digit)  // sort is a call back function

//sort() can be of three ways
// 1- sort()
// 2- sort((a,b) => a-b) - ascending
// 3- sort((a,b) => b-a) - descending

//advance array methods
// 1.ForEach () - to iterate any array we use this method, it is HOF , and it accept one call back function and this CBF will accept 3 parametre (array element , index value , complete array)
 //foreach will not return any value  (MOSTLY USED)
// 2-Map() - map will return updated array (syntax is same as foreach) it will accept only expression  (MOSTLY USED)
// 3-filter()- used to filter the array based on condition and it will return new filtered array (syntax is same as foreach and map)  
//it will acccept only condition   (MOSTLY USED)
// 4-Find ()- it also accept only condition but  find will return only single value
// 5- reduce () - it will accept one call back function and reduce accept 2 parametre (cbf ,initial value)
//and that cbf will accept two parametre(accumulator,current value)
//it will reduce the array and it will return single output.

//const arr4 = [10,20,30,40,50,60,70,80];
//arr4.forEach((ele,i,ar) => {
   // console.log(ele)          // first parametre should be array element  
   //console.log(ar)    // second parametre will iterate 8 times as the value are 8 in array
console.log((ele,i,ar) => {    //in every array element we want to add value  , it will not return any value
      return ele+5;
   });
console.log(a)   

let b = arr.map((ele,i,ar) => {  // here it will return new updated array
   return ele + 5;
})
console.log(b)

let c = arr.filter((ele,i,ar) => {  // here it will return new filtered array
   return ele >= 30;
})
console.log(c)

let d = arr.find((ele,i,ar) => {  // here it will return only single value
   return ele >= 30;
})
console.log(d)

let arr9 = [10,20,30,40,50,60,70]
arr9.reduce((accumulator,currentVal)=>{ 
   return accumulator + currentVal  // after addition storing that value  in accumulator 
 }, 0 );   //initial value for accumulator (every time it iterate it will add)  //in reduce method along with iteration it is performing some task
//it will work left to right but if we want right to left we use reduce-right (syntax is same for both)
console.log(result);

//if we have multiple nested array (FLAT METHOD):-
const arr8 = [[[[[[50,70, [[[10]]]]]]]]];  //flat will remove all the array and return one single array(it will return new array with all the values)
console.log(arr.flat(9));//it just remove that arrays [10]
//const arr8 = [[[[[[[[[10]]]],20,40]]]]]; 
//console.log(arr.flat(9));
//const arr8 = [[[[[[[[[10]]]],20,40]]]]];  
//console.log(arr.flat(9));





