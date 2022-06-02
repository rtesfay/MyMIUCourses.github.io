/**
 * 12.	Implement Javascript code for a function named, 
 * findSecondBiggest, which takes as input, an array of numbers 
 * and finds and returns the second biggest of the numbers. For example, 
 * findSecondBiggest([1,2,3,4,5]) should return 4. 
 * And findSecondBiggest([19,9,11,0,12]) 
 * should return 12. (Note: Do not use sorting!)
 */

function findSecondBiggest(array){
    let biggest=-Infinity;
    let secondBiggest=-Infinity;
    for(let i=0; i<array.length; i++){
        if(array[i]>biggest){
            secondBiggest=biggest;
            biggest=array[i];
        }
    }
    return secondBiggest;
}
console.log(findSecondBiggest([8,4,1,5]));
