/**
 * 7.Write a function filterLongWords() that takes an array of words
 *  and an integer i and returns a new array containing only those words 
 * that were longer than i characters.
 */

 function filterLongWords(arr,int){
    let result = [];
    for(let index=0; index< arr.length;index++){
        if(arr[index].length > int){
            result.push(arr[index]);
        }
    }
    return result;
}
console.log(filterLongWords(['Hi', 'Hello', 'hey', 'there'], 4));
