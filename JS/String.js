// let str = 'Velocitai';
// console.log(str) ;              //single quotes
// console.log(typeof(str));
// let str1 = "velocitai" ;          //double quotes
// console.log(str1); 
// let str2 = `velocitai` ;        //bactick 
// console.log(str2); 

// let age = prompt("enter your age");
// let str = "age of the person" + age + "he is eligible to vote."; 
  //1st way - first seperate that strings then insert the variable
 //there are two ways t0 use str 1- +   2- interpolation  ${}
// console.log(str);
 //2nd ways by using interpolation with bactick(only)  (interpolation is technique to use variable in string and it will work only in bactick)
//when we use interpolation in string then that string is called template string 
// let age1 = prompt("enter your age");
// let str1 = `age of the person ${age1}  he is eligible to vote.`; 
// console.log(str1);  


//in string the index can start from negative also (-1,-2,-3)
let str = "mantasha";
console.log(str.length);
console.log(str.slice(2,6));
console.log(str.slice(-4 , -2));  //slice method will take positive and negative index
console.log(str.substring(2,4));  //substring will not accept negative index
//substr is depricated(no longer use) 
console.log(str.substr(2,8));  // (starting index , length)
let str1 = "saas is a css framework";
console.log(str1.replace("saas", "tailwind" ));  // replace is used to replace the string (string which is to be replaced , replacable item) it will replace first occurence
let str2 = "java and java script both are different";
console.log(str2.replace("java script", "javascript" )); 
console.log(str2.replaceAll("java", "python"));  // if we want to replace java with python like second java
//replaceall will replace all occurence 
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str1.concat (str1,' ' ,str2));  // used to concat two string  
console.log(str.trimStart()); //remove space from starting
console.log(str.trimEnd());  // remove space from end
console.log(str.trim());     //it will remove space from end and start (it is short hand) //first slice last four character 
let mobileNo = "1234567890";  
let no = mobileNo.slice(6);
console.log(no); 
console.log(no.padStart(10,"*"));  // accept two parametre(how much length we want , what you want like *)

//OR 
// let no1 = 7849; //******1234 */
// console.log(no1.padStart(10,"*"));


let mobileNo1 = "1234567890";  
let no2 = mobileNo1.slice(0,4);
console.log(no2);
console.log(no2.padEnd(10,"*"));

console.log(str.charAt(2));
//console.log(str.charAt(-2)); //charAt() is not supporting -ve index
console.log(str.charCodeAt(2));  // it gives ASCII code (it convert character into ASCII code)
console.log(String.fromCharCode(97));  //it is a contructor method (it convert ascii into string)
console.log(str.split());   // to convert string into array


let arr = [10,20,30,40,50];
for (const x of arr) {
    console.log(x)
}

for (const x in arr) {
    console.log(x)
}

let emp = {   
    empName:"Mantasha",
    empId:13,
    salary:50000
    
   };   

// for (const x of emp) {
//     console.log(x);
// }

for (const x in emp) {
    console.log(x);
}










