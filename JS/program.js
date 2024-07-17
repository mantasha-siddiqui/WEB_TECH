function factorial(n) {
    if (n < 0) {
      return "Factorial not defined for negative numbers.";
    }
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  let number = prompt("Enter a number to find its factorial:");
  number = parseInt(number);

  if (isNaN(number)) {
    alert("Please enter a valid number.");
  } else {
    let result = factorial(number);
    alert("The factorial of " + number + " is " + result);
  }