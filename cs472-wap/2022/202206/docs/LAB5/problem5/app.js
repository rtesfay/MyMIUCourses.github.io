/*
 * 5.	Define a function reverse() that computes the reversal of a string. 
For example, reverse("jag testar") should return the string "ratset gaj".
 */

function reverseString(ch){

    return ch.split('').reverse().join('');
}
console.log(reverseString('jag tester'));
