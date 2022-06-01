/**3.Write a function isVowel() that takes a character 
 * (i.e. a string of length 1) and returns true if it is a vowel, 
 * false otherwise. */
function isVowel(str){
    
    if((str.length===1)&&(((((str.charAt(0)==='a') ||(str.charAt(0)==='e')||(str.charAt(0)==='i')||(str.charAt(0)==='o')||(str.charAt(0)==='u')))))){
        return true;
    }
    else{
        return false;
    }
}
console.log(isVowel('a'));
console.log(isVowel('aa'));
console.log(isVowel('mom'));
console.log(isVowel('u'));