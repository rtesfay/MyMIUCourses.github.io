/**
 * 9.	Write a function named, printOddNumbersOnly, that takes as input, 
 * an array of integral numbers and it finds and prints only the numbers 
 * which are odd.
 * 
 */
//using imperative paradiagm
function printOddNumbersOnly(Array){
    let newArr= [];
    for(let i=0; i<Array.length; i++){
        if(Array[i]%2!=0){
            newArr[i]=Array[i];
        }

    }
    return newArr;

}
console.log(printOddNumbersOnly([1,4,5,9,8,7,6]));

//using declerative paradiagm or functional programmming
function printOddNumbersOnly(arr){
    return arr.filter(x=>x%2 !=0);
}
console.log(printOddNumbersOnly([1,4,5,9,8,7,6]));
