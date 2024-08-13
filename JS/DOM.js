
// console.log(document.getElementById("container")); it will return single html element it will target 1st elemnt only

//console.log(document.getElementsByClassName("box"))  // it will return html collection(it is the array like object(it looks like array but it is an object))

//if we want access value from html collection we can access it with index value
//let htmlcollection = document.getElementsByClassName("box")
//console.log(htmlcollection[1]);

// let htmlcollection = document.getElementsByTagName("box")  //we can only pass parameter it in string format
// console.log(htmlcollection); //it also return html collection 

// let htmlcollection = document.querySelector("#container")  //we can only pass parameter it in string format (here we have passed id so pass #)
// console.log(htmlcollection);   
//if using id = # , for class . 
// we have multiple id then also it is targeting 1st element 
//it is returning one single Element (i.e first element)(if we use id , class name or tagname)

//let htmlcollection = document.querySelectorAll("#container")  
//console.log(htmlcollection);  
// here both the syntax are same it also select class , id and tag name but it is returning nodelist (it is the collection of all nodes)
//node (in structure of DOM each element is node) /// it is also array like object by using index value we can access it

// difference between nodelist and html collection
 
// NodeList
// A NodeList is a collection of nodes, typically returned by methods like document.querySelectorAll().
// A NodeList can be either live or static. For example, document.querySelectorAll() returns a static NodeList
//  (any changes in the DOM do not affect the content of the collection.), while childNodes is live.
// It is iterable, so you can use forEach directly on it.

// HTMLCollection

// An HTMLCollection is a collection of HTML elements, typically returned by methods like document.getElementsByClassName() or document.getElementsByTagName().
// An HTMLCollection is always live, meaning it updates automatically when the document changes.
// It is not directly iterable, so you need to convert it to an array to use array methods like forEach.

//to modify dom 
// let section = document.getElementById("container");

// section.style.backgroundColor="blue";  // take that same variable here also which u have declare above
// section.style.borderRadius="50%";


// let section2 = document.getElementsByClassName("box");
// section2[1].style.backgroundColor="blue"; 
// section2[1].style.boxShadow= "0px 10px 20px black";
// section2[1].style.borderRadius="50%";

// let section3 = document.getElementsByClassName("box");

// section3[2].style.background="linear-gradient(to left, red,green,yellow)" ;   // for multiple background color
// section3[2].style.borderRadius="50%";

//createlement()
// let section = document.createElement("section");
// console.log(section);  

//setattribute()
// let section = document.createElement("section");
// section.setAttribute("class" , "container");  // attribute name (id , class) and attribute value
// section.setAttribute("id" , "box");  // we this we can get id also

// section.innerText="hello section";  // to insert , to modify  text inside any element we use innerText 
// to insert that element in webpage we have append method (we have to insert it in html page bcz we need in browser so target that tag with class , id in js)
// let body = document.querySelector("body");
// body.append(section)   // to insert any created html element 
///for insertion we have two methods we have append , appendchild()
// console.log(section);

let body = document.querySelector("body");
//body.append(h1,h2); // by appendchild we can append only one element but with append we insert multiple eleemnt
let h1 = document.createElement("h1");
h1.setAttribute("class" , "container");
h1.innerText="hello";
body.append(h1);
console.log(h1);

let h2 = document.createElement("h2");
h2.setAttribute("class" , "container");
h2.innerText="hello DOM";
body.append(h2);
console.log(h2);

// let container = document.querySelector("#container");
// container.remove(); // for first element use query selector

//if we want to remove second element use elementsbyid 
let container = document.getElementsByClassName("box");
container[1].remove();

//we can access internal html element

let section = document.querySelector("section");
section.innerHTML += "<h1>hii , i am h1 </h1>";  // i want to replace that para tag by h1 and use + if we want all para tag with h1 tag
console.log(section.innerHTML);
//console.log(section);
//if we want to access children element
console.log(section.children);





 









