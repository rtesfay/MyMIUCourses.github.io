/**
 * 13.	Write a function named printFibo, that takes as input, 
 * a given length, n, and any two starting numbers a and b, 
 * and it prints-out the Fibonacci sequence, 
 * e.g. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34,…) of the given length, 
 * beginning with a and b. (e.g. printFibo(n=1, a=0, b=1), prints-out: "0", 
 * as output; printFibo(n=2, a=0, b=1), prints-out: "0, 1", as output; 
 * printFibo(n=3, a=0, b=1), prints-out: "0, 1, 1", as output; 
 * printFibo(n=6, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5", as output; 
 * and printFibo(n=10, a=0, b=1), 
 * prints-out: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34", as output).
 */

 function printFibo(n,a,b){
    let sum = 0;
    let result = [];
    if(n == 1){
        return a + " ";
}
    if(n==2){
        return a + ","+ b;
    }
    result.push(a);
    result.push(b);
    for (let index = 2; index < n; index++) {
        sum = a+b;
        a = b;
        b = sum;
        result.push(sum);
        
    }
    return result.toString();
}
console.log(`The fibonacci seqeunce is ${printFibo(6,0,1)}`);

