/**
 * 11.	Using the Array.reduce(…) function, re-implement your functions, 
 * sum(…) and multiply(…) (defined in Problem 4 above) without using 
 * Imperative programming. i.e. Do NOT use any explicit looping construct; 
 * instead use functional programming style/approach. 
 */
 function sum(arr){
    return arr.reduce((x,y)=>x+y,0);
 }
console.log(sum([2,4,0,8]));