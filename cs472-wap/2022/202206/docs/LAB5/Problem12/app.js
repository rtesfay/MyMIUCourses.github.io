/**
 * 12.	Implement Javascript code for a function named, 
 * findSecondBiggest, which takes as input, an array of numbers 
 * and finds and returns the second biggest of the numbers. For example, 
 * findSecondBiggest([1,2,3,4,5]) should return 4. 
 * And findSecondBiggest([19,9,11,0,12]) 
 * should return 12. (Note: Do not use sorting!)
 */
function findSecondBiggest(Array, numbers){
    Array[0]=biggest;
    Array[1]=secondBiggest;
    for(let i=0; i<Array.length; i++){
        if(Array[0]<Array[1])
secondBiggest=Array[0];
    }
    return secondBiggest;
}
console.log(findSecondBiggest([2,4,1,0]));