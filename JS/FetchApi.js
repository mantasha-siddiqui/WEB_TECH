//let fetchData = fetch("https://api.github.com/users").then((res)=>{
//console.log(res.json()); // to convert json into JS (to fetch) here we have json()
//O/P - Promise {<pending>}[[Prototype]]: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: Array(30)
//return res.json();
//});
//console.log(fetchData); // when i use fetch method i got promise and promise result is response

// let fetchData = fetch("https://api.github.com/users")  // it return promise (to fetch the data we need some time so it is returning promise)
// .then((res)=>{
//     return res.json();   // it will return one response object , response object  will give return one promise
// })                       
// .then((data)=>{
//    console.log(data);  //now to handle them we again use then()
// })


//async and await - it is used to make any statement asynchronous , 
// create a normal function now we will make that function asynchronous (it may take some time to fetch dataand as js is synchronous we 
//cant execute other things so we make this function asynchronous so that it may get executed seperately.

// let fetchData = async () =>{
//     let response = await fetch("https://api.github.com/users")  
// await will wait until this particular line execution is not completed , it will not go to next line pointer will remain there, after using await it will not return promises
//     let data = await response.json() // now that above response will again return promise so we use await again
     //console.log(data);   // data is array so we can iterate this array
//     data.forEach((ele , index , arr) => {
//         console.log(ele);
//     });
// };
// fetchData();

let section = document.querySelector("section")

let fetchData = async () =>{
    let response = await fetch("https://api.github.com/users")  
    let data = await response.json() 
    data.forEach((ele , index , arr) => {
        console.log(ele);
        displayUser(ele);
    });
};
fetchData();

let displayUser = (data) => {
    let card = document.createElement("div")
    card.setAttribute("class" , "cards")
    card.innerHTML = `<img src="${data.avatar_url}" alt="" class = "userImage">
                      <h1>${data.login}</h1>
                    <p>${data.id}</p>` ;
                    
    section.append(card);
};