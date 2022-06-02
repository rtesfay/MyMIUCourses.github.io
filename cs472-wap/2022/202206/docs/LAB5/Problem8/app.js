/**
 * 8.	Write a function named, computeSumOfSquares, that takes as input, 
 * an array of numbers and calculates and returns the sum of the squares 
 * of each number in the input array. E.g. computeSumOfSquares([1,2,3]) 
 * should be computed as 12 + 22 +32 = 14. Note: Write your Javascript 
 * code without using Imperative programming. i.e. Do NOT use any explicit 
 * looping construct; instead use functional programming style/approach.
 */
function computeSumOfSquares(Array){
    sum=0;
    for(let i=0; i<Array.length; i++){
        sum+= Array[i]*Array[i];

    }
    return sum;

}
console.log(computeSumOfSquares([1,2,3,4]))