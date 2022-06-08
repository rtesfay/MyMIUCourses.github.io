//"use strict"

console.log(`what is This???`);

//Global environment

console.log(this);//points to the window object

//Function environment
function foo(){
    //this points to 'window' obj when executing with out strict mode
        //this points to 'undefined' obj when executing on strict mode

    console.log(this);
}
foo();

//this inside funtion expression

//this points to 'window' obj when executing with out strict mode
        //this points to 'undefined' obj when executing on strict mode

const foo2=function(){
    console.log(this);

}
foo2();

function foo3(){
    this.property="hello";//on strict mode, TypeError
}
foo3();
console.log(prop);
console.log(this);
console.log(this.prop);

function foo4(){
    const PI=3.14;
    function bar(){
        console.log(this);
    }
    bar();
}
//undefined in js is null in java

//"this" in an object literal
const bob={
    firstName: "Bob",
    lastName: "Jones",
    printThis: function(){
        console.log(this);

}
}
bob.printThis();