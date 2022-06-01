/**
 * 10.	Write a function named, computeSumOfSquaresOfEvensOnly,
 *  that takes as input, an array of integral numbers and calculates 
 * and returns the sum of the squares of only the even numbers in 
 * the input array. E.g. computeSumOfSquaresOfEvensOnly ([1,2,3,4,5]) 
 * should be computed as 22 +42 = 20.
 */
function computeSumOfSquaresOfEvensOnly(Array){
    var newArray=new Array();
    for(let i=0; i<Array.length; i++){
        sum=0;
        if(Array[i]%2==0)
        sum+=newArray[i]*newArray[i];
    }
    return newArray;

}
console.log(computeSumOfSquaresOfEvensOnly([2,1,4,0]));