//write a JS program to find the no is palindrome or not
let a = parseInt(prompt("Enter a Number"));
function palindrome(a) {
  let b = a;
  let temp = 0;
  while (a>0) {
    let c = a % 10;
    temp = temp * 10 + c;
    a = parseInt(a/10)
    console.log(a);
  }
  if(temp == b) {
    console.log("palindrome");
  }else{
    console.log("not palindrome");
  }
  }
  palindrome(a);  



// write a JS program to find the factorial of a number
let n = parseInt(prompt("Enter a number"));

  function factorial(n){
    if(n < 0){
        return "number has to be positive."
    }
   
    if(n == 0 || n == 1){
        return 1;
    
    }else{
        return n * factorial(n-1);
    }
}
result = factorial(n);
console.log("Factorial of " + n + " : " + result);


//write a JS to find the no is armstrong or not
let sum = 0;
let number = parseInt(prompt("Enter a number"));

let temp = number;
while (temp > 0) {
    
    let r = temp % 10;
    sum += r * r * r;
    temp = parseInt(temp / 10); 
}

if (sum == number) {
    console.log("no is an Armstrong number");
}
else {
    console.log("no is not an Armstrong number");
}
  
// program to generate fibonacci series up to a certain number
let number1 = parseInt(prompt("Enter a number"));
let n1 = 0, n2 = 1, n3;

console.log('Fibonacci Series:');
console.log(n1); 
console.log(n2);

n3 = n1 + n2;

while (n3 <= number) {
    console.log(n3);
    n1 = n2;
    n2 = n3;
    n3 = n1 + n2;
}

// program to check given no is prime or not
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
    let a1=parseInt(prompt("enter a number:-"));
    PrimeNumber(a);