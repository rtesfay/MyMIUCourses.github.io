/**
 * 9.	Write a function named, printOddNumbersOnly, that takes as input, 
 * an array of integral numbers and it finds and prints only the numbers 
 * which are odd.
 */
function printOddNumbersOnly(Array){
    var newArr=new Array();
    for(let i=0; i<Array.length; i++){
        if(Array[i]%2!=0){
            newArr[i];
        }

    }
    return newArr;

}
newArr=[4,5,8,7]
console.log(printOddNumbersOnly(newArr));