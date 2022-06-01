/**
 * 7.Write a function filterLongWords() that takes an array of words
 *  and an integer i and returns a new array containing only those words 
 * that were longer than i characters.
 */
function filterLongWords(Array,int){
   var newArr=new Array();
   var int;
    for(let i=0; i<Array.length; i++){
        if(Array[i].length>int){
newArr[i];
        }
    }
return newArr;
}
console.log(filterLongWords(["hi","hey","hello"], 2));