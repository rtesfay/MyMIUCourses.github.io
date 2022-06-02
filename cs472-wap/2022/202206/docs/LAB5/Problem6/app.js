/**
 * 6.Write a function findLongestWord() that takes an array of words
 *  and returns the length of the longest one.
 */

//using rest. A rest parameter must always be the last argument, else it will throw an arror
function findLongestWord(...words){
    let longestWordLength = -Infinity;
    for(let index=0; index <words.length;index++){
        if(words[index].length > longestWordLength){
            longestWordLength= words[index].length;
        }
    }
    return longestWordLength;
}
console.log(findLongestWord('army', 'soldier', 'quarter', 'colonel'));


//Using arguments
function findLongestWord(){
    let longestWordLength = -Infinity;
    for(let index=0; index <arguments.length;index++){
        if(arguments[index].length > longestWordLength){
            longestWordLength= arguments[index].length;
        }
    }
    return longestWordLength;
}
console.log(findLongestWord('hi', 'hello??', 'hey', 'there'));

