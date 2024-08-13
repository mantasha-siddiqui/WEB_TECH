// let obj1 = {
//     empName: "mantasha",
//     empId: 12,
//     salary: 3000,

// };

// console.log(obj1);

 // console.log(JSON.stringify(obj1)); // this JS object is converted into JS format into JSON format

// let jsonData = JSON.parse(obj1); // now this again convert JSON format into JS format


//array destructuring

// let arr = [10,20,30,40,50,60,70,80];
 //let [a,b,c,d,e,f,]=[...arr];   //... this is spread operator
// let [a,b,c,d,e, ...ar]=[...arr];  // ar is another variable and before that ... this is rest parameter
// console.log(b);


// function sum(a,b,c,d, ...ab) {
//     console.log(a+b+c+d);
//     console.log(ab);
    
// }

// sum(10,30,50,60,70,80,90,20);


//object destructuring
//while destructuring object we use same keyname and curly braces
// let emp = {
//          empName: "mantasha",
//          empId: 12,
//          salary: 3000,
//          mgrNo: 4536,
//          comm: 1000,
//          DOB: "02/10/2001"

// };

// console.log(emp.empName)  // BEFORE DESTRUCTURING (OBJNAME , KEYNAME)

// let {empName,salary,mgrNo} = { ...emp};  //SEQUENCE DOESNT MATTER  
// console.log(empName);   // AFTER DESTRUCTURING WE CAN PASS DIRECTY

//browser storage
// localStorage.setItem("password", "123456789"); 
// console.log(localStorage.getItem(password)); 
//let a = "password";
//localStorage.setItem(`${a}` , "1234567");
// console.log(localStorage.getItem(`${a}`));  //only key as a parameter
// localStorage.remove(keyName);                            
//  localStorage.clear();  //to clear the data 


