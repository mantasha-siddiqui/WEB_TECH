//in js create the list of studies\

// let ol = document.querySelector("ol"); // we have to insert li options in ol tag we have to target it
// let cities = ["delhi" , "lucknow" , "banaras" , "allahabad" , "pune" , "mumbai" , "bangalore" , "bihar" , "gurugram" , "greater noida"];

// cities.forEach((ele, i, arr) => {
//    ol.innerHTML += `<li>${ele}</li>`; // it will give only last cityname so use + before = so it will give all cityname
    
// });


let select = document.querySelector("select");
let cities = ["delhi" , "lucknow" , "banaras" , "allahabad" , "pune" , "mumbai" , "bangalore" , "bihar" , "gurugram" , "greater noida", "dehradun"];

cities.forEach((ele, i, arr) => {
   select.innerHTML += `<li>${ele}</li>`;
   select.innerHTML += `<option>${ele}</option>`
});