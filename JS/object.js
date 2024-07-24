//BY OBJECT LITERALS
let emp = {   //syntax of object and object consist of key value pair, we have seperate each key value pair by using comma
 empName:"Mantasha",
 empId:13,
 salary:50000,
 job:"ASE"  
};                      // now we perform CRUD operation

console.log(emp.empName);    // (dot notation)  {syntax = objectname.keyName }
//to access(READ) the data from object we have 2 ways 1 - by dot notation 2- by using array []

console.log(emp["salary"]); // by using array 


//to insert one manager key inside above object (UPDATE)
emp.mgr = 2030; //(objectname.keyName = value) 
console.log(emp)

//if one key is already inserted which i want to insert so that prevoius value  will be overridded by new value
emp.empId=2040;
console.log(emp)

//{example if we want salary in array form } -  salary = [10, 20, 30] , console.log(emp.salary[0])


//if we want to delete salary key from emisting object so use delete keyword
delete emp.salary
console.log(emp);


//BY USING OBJECT CONSTRUCTOR(NEW KEYWORD)

let Object= new Object();  // object is constructor here (creation is done)
obj.empName="seema"; //inserting an element
console.log(Object);

// OR

//with the help of new , new object is created

function fun(a, b, c, d) {  //all function internally are objects.
    console.log(a,b,c,d);   // values are not stored inside fun if we want to store then use "this" keyword
}
let fun1 = new fun(10,20,30,40); //it will create exact copy of function so we use new , and  we can create multiple copy and make changes also
let fun20 = new fun(109,203,302,40); //syntax= {new keyword function name}  // object reference  we are storing in some variable like in fun20 we are storing 

fun1.id=400000;  // we can make changes,like this we can insert value
console.log(fun1);
console.log(fun20);

//suppose if we are assigning let abc = 30; outside object  and we want 30 as a key inside object with same data
// let abc = 30;
// let abc = 30 > 50 ? "login" : "LogOut";  //{output = logOut:"jaduu" and 30 < 50  output = login:"jaddu"}
// let emp1 = {   
//     empName:"Mantasha",
//     empId:13,
//     salary:50000,
//     job:"ASE" ,
//     [abc]: "jaduu" 
//    };  
//    console.log(emp1); // in object if want to use any variable value as a key then we have  to wrap that variable in array operator 

   
   let emp3 = {   
    empName:"Mantasha",
    empId:13,
    salary:[20,50,20],
    job:"ASE" ,
//     dance: function dance(){
//         console.log("dancing"); //this is behaviour of object here we have function inside dance key 
// function dance(){
    //console.log("dancing"); if we dont want to declare dancing in any key so internally it will consider as a key only
//     }
//    };  

//     console.log(emp3);
//     emp3.dance(); //value of key is a function so directly we can call (objname.keyname) {keyname:function}
//     console.log(emp3.salary[0]); //20


   //Object.keys(emp2)  - {1}it will return array of keys(object constructor)
//    Object.keys(emp3).forEach((ele, i , arr) => { 
//     console.log(emp3[ele])   // use array method we will not use dot notation bcz we want key name in string and if dot then it will return that in quotes
//    });                          //if the key is not present in object then it will give undefined

};

// console.log(Object.values(emp3)); // {2}values method

console.log(Object.entries(emp3));  //{3} it will return keys and value


let emp4 = {   
    empName:"Mantasha",
    empId:13,
    salary:[20,50,20],
    job:"ASE" ,
};

let emp5 = {   
    empName1:"Mantasha",
    empId1:13,
    salary1:[20,50,20],  /// it is used to merge two or more object
    job1:"ASE", 
};                 // it accept two parametre (target object(emp4) , source object(emp5) (multiple source obj we can pass))
//in assign we want to merge the object of emp5 in emp4 

// console.log(Object.assign(emp4,emp5));  //{4}  //assign method will affect target object but we don't want so we create a dummy empty object
// console.log(Object.assign({},emp3,emp4)); // so here {} is target object and emp4 and emp5 is a source object


//1-seal () if we seal that object we can't delete any key from that object or we cannot add any key (if we seal any object then we can add(insertion), delete but we can update that key )

// Object.seal(emp4); {5}
// emp4.mgr=303;
// emp.empName="pranav";
// delete emp.job;   
// console.log(emp4);

// Object.freeze(emp4);
// 2-freeze () - if we freeze any object then  updation,insertion and deletion is not possible {6}

console.log(Object.isSealed(emp4));   //{7}
console.log(Object.isFrozen(emp4));  //return type of both the method is boolean {8}

console.log(emp.hasOwnProperty("empName"));   //{9}

let emp7 = {   
    empName:"Mantasha",
    empId:13,
    salary:[20,50,20],
    job:{
        jobName:"ASE",
}

};

console.log(emp7.job.jobName);











