let section = document.querySelector(".box1");
console.log(section);
     
section.addEventListener("click", (e)=>{
    e.stopPropagation()
     section.style.backgroundColor="red";
});

let section1 = document.querySelector(".box2");
section1.addEventListener("click", (e)=>{
    e.stopPropagation()
    section1.style.backgroundColor="blue"; 
});

let section2 = document.querySelector(".box3");
section2.addEventListener("click", (e)=>{
    e.stopPropagation()
    section2.style.backgroundColor="yellow"; 
}); 


// prevent default - to stop default behaviour (any behaviour like form refreshing or navigation)
// e.preventdefault()