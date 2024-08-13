let text = document.querySelector(".text");
let buttons = document.getElementsByTagName("button");
// console.log(buttons);

let finalVal = Number(text.innerText); //array.from - it is used to convert into array

let inputVal = 0;
Array.from(buttons).forEach((element) => {
    element.addEventListener("click", (e) =>{
        let val = e.target.innerText;   // console.log(e.target.innertext);  // when we target on that particular element (.target)

    if(
        val != "+" &&
        val != "/" &&
        val != "*" &&
        val != "CL" &&
        val != "-" &&
        val != "=" 
    ){
        inputVal = val;
        text.innerText = val;

    }
    if(e.target.innerText == "+"){
        // console.log(inputVal);
        text.innerText = finalVal;
        add(inputVal);
    }
        
    });
});
 let add = (val) => {
    console.log(val);
    finalVal += Number(val);
    text.innerText = finalVal;
 };

 let subtract = (val) => {
    console.log(val);
    finalVal += Number(val);
    text.innerText = finalVal;
 };

