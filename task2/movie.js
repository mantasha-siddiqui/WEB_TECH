let googleNews = document.querySelector(".googleNews");
let businessNews = document.querySelector(".businessNews");
let sportsNews = document.querySelector(".sportsNews");
let entertainmentNews = document.querySelector(".entertainmentNews");
let scienceNews = document.querySelector(".scienceNews");
let popUPBody = document.querySelector(".popUPBody");
let crossbtn = document.querySelector(".crossbtn");


let searchButton = document.querySelector(".searchButton");
let SearchInput = document.querySelector(".SearchInput");

let fetchMovie = async (url, container) => {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    data.articles.filter((ele)=> ele.urlToImage!=null)
    .forEach((ele, i , arr) => {
        displayNews(ele, container);
    
    });
};

fetchMovie("https://newsapi.org/v2/everything?q=apple&from=2024-08-07&to=2024-08-07&sortBy=popularity&apiKey=d11b27a496bd497b861cff3ee1961a05",googleNews);

fetchMovie("https://newsapi.org/v2/everything?q=apple&from=2024-08-07&to=2024-08-07&sortBy=business&apiKey=d11b27a496bd497b861cff3ee1961a05",businessNews);

fetchMovie("https://newsapi.org/v2/everything?q=tesla&from=2024-07-09&sortBy=publishedAt&apiKey=52d35f32c0dc4c3bbed5eb9b27379de4",sportsNews);

fetchMovie("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=d11b27a496bd497b861cff3ee1961a05",entertainmentNews);

fetchMovie("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=d11b27a496bd497b861cff3ee1961a05",scienceNews);


let displayNews = (data , container) => {
    let cards = document.createElement("div");
    cards.setAttribute("class","cardCont");
    cards.innerHTML = `<img src="${data.urlToImage}" alt="" class = "cardImg">
                       <p>${data.title}</p>
                       <p>${data.author}</p>
                    <p>${data.publishedAt}</p>`

    cards.addEventListener("click", (e) =>{
       popUPBody.style.visibility = "visible";

    });

                    container.append(cards);
};

 let displayPopUpData=()=>{

 }

 crossbtn.addEventListener("click", () =>{
    popUPBody.style.visibility = "hidden";
 })


//  searchButton.addEventListener("click", () => {
//     let query = SearchInput.value.trim(); // Get the search query from the input field
//     if (query) {
//         fetchMovie(`https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=d11b27a496bd497b861cff3ee1961a05`, googleNews);
//     }
// });


