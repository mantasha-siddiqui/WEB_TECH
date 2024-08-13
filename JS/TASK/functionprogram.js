//WAF that takes two numbers as argument and returns thier sum
function sum(a, b) {
    return a + b;
}
const result = sum(5, 3);
console.log(result); 

//WAF that accept a string and return it reversed
function reverse(str){
    return str.split('').reverse().join('');
}

let str = "mantasha";
let str1 = reverse(str);
console.log(str1);

//create a Function that checks if a given number is a prime number
function PrimeNumber(num){
    var i;
    var count=0;
    for(i=2;i<=num/2;i++){
      if (num%i==0){
        count++;
        break;
      }
    
    }
    if (count==0 &&num!=1){
      console.log(num+" is a prime number");
    } else{
      console.log(num+" is not a prime number");
    }
    
    
    }
    let a1=parseInt(prompt("enter a number:"));
    PrimeNumber(a1);

//write a function that accept an array and return a new array with unique elements

