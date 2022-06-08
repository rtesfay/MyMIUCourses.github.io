"use strict";
console.log(`Apply, Call and Bind methods on Function obj`);

const add = function(num1, num2){
    return num1 + num2;
};

const sum = add(3,5); //litral function invocation
console.log(`The sum of 3 and 5 is ${sum2}`);

const sum2 = add.call(null, [3, 5]);
console.log(`The sum, using apply() method. of 3 and 5is ${sum3}`)

//function currying
const newSumFunction=add.bind(null, 3);
console.log(`The sum, using bind, of 3 and 5 is ${newSumFunction(5)}`);