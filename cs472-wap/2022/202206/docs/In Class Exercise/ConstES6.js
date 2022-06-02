"use strict";
const MY_NUM = 7; 
MY_NUM = 20; // this will fail 
console.log(MY_NUM); // will print 7 
const MY_NUM = 20; // trying to redeclare a constant throws an error 
var MY_NUM = 20; // this will fail 

const FOO; // SyntaxError: missing = in const declaration 

const MY_OBJECT = {"key": "value"}; // const also works on objects 
MY_OBJECT = {"OTHER_KEY": "value"}; // this will fail 

// object attributes are not protected, so the following statement is executed without problems 
MY_OBJECT.key = "otherValue"; // will work!
