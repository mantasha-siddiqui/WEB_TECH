//create a function taht merges two arrays and remove duplicates values

let arr5 = [1,2,3,4,5];
let arr6 = [3,4,7,8,9];

let mergearray = arr5.concat(arr6);






//Implement a function that takes an array of numbers and return the average
// function calcAverage(arr1) {
//     let sum=0;
//     count=0;
//     arr1.forEach((element,index)=> {
//         sum+=element;
//         count++;
//     });
//     let avg=sum/count;
//    return avg;
// }

// const arr1 = [1, 2, 3, 4, 5, 6];
// const average = calcAverage(arr1);
// console.log("The average is:", average);

// //WAF that takes an array of numbers and return the largest number
// function LargestNumber(arr2) {
//     if (arr2.length === 1) {
//         return arr2[0];
//     } 
//     let larg=arr2[0];
//     for(let i=1;i<=arr.length;i++)
//     {
//         if(arr[i]>larg)
//             larg=arr2[i];
//     }
//     return larg;
// }

// const arr2 = [1, 8,10, 2, 3, 6, 4, 9, 5];
// const largest = LargestNumber(arr2);
// console.log("The largest elemet is:", largest);


// //Implement a function that removes all the falsy values from an array
// function remFalsy(arr) {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }

// const arrayOfFalsyValues = ["mantasha", false,0, 1, 2, '', 3, null, 'a', undefined, 'b', NaN];
// const filteredArray = remFalsy(arrayOfFalsyValues);
// console.log(filteredArray); 


// //Implement a function that takes an array of no and returns the sum of all the numbers

// function calcSum(arr) {
//     if (arr.length === 0) {
//         return 0;
//     }
//     let sum=0;
//     count=0;
//     arr.forEach((element,index)=> {
//         sum+=element;
//     });
//    return sum;
// }

// const arr = [10, 20, 30, 40, 50];
// const sum = calcSum(arr);
// console.log("The sum of array is:", sum);


// //Implement a function that find the array element more than the avg of its array element

// function FindElementMoreThanAvg(arr3) {
//     let sum=0;
//     count=0;
//     arr3.forEach((element,index)=> {
//         sum+=element;
//         count++;
//     });
//     let avg=sum/count;
//     let result=[];
//     arr3.forEach((element,index) => {
//         if(element>avg)
//         {
//             result.push(element);
//         }
        
//     });

//    return result;
// }
// const arr3 = [1, 2, 3, 4, 5, 6];
// console.log(FindElementMoreThanAvg(arr));