/**
 * 6.Write a function findLongestWord() that takes an array of words
 *  and returns the length of the longest one.
 */
function findLongestWord(arr){
    for(let i=0; i<arr.length; i++){
        arr[0]=longest;
        if(arr[i].length>arr[0].length){
            longest=arr[i];
        }
        return longest;

    }

    console.log(findLongestWord(["hi","hey","hello"]));
}


