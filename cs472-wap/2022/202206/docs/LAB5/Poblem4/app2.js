/**4.Define a function sum() and a function multiply() 
 * that sums and multiplies (respectively) all the numbers 
 * in an input array of numbers. For example, sum([1,2,3,4]) 
 * should return 10, and multiply([1,2,3,4]) should return 24. 
 * Note/Hint: Do these using Imperative programming 
 * approach(i.e. for…loop or while…loop)
 * 
 */
 function multiply(arr){
    let multiply=0;
    for(let i=0; i<arr.length; i++){
        multiply*=arr[i];
    }
    console.log(multiply[2,4,1]);
}