// Question 6
const count = (function(){
    let counter = 0;
    const add = function(){
        counter+=1;
    }
    const reset = function(){
        counter = 0;
    }

    const getCounter = function(){
        return counter;
    }
    return{
        add: add,
        reset: reset,
        getCounter: getCounter
    }
})();

count.add();
console.log(count.getCounter());
count.reset();
console.log(count.getCounter());

// Question 7
// Free variable is the counter
// A free variable is a variable not declared in the function or passed as a parameter in the function but is accessible to the function

// Question 8
const make_adder = (function(){
    let counter;
    const setCounter = function(inc){
        counter = inc;
        initialCounter = inc;
    }
    const add = function(){
        counter+=initialCounter;
        return counter;
    }
    return{
        add: add,
        setCounter: setCounter,
    }

})();

console.log(make_adder.setCounter(5));
console.log(make_adder.add());
console.log(make_adder.add());
console.log(make_adder.add());

//Question 8
//  const make_adder2 = (function(inc){
//      let counter ;
    

//      const add= function(){
//          counter+=inc;
//          return counter;
//      }
//      const incr = function(num){
//              counter = num;
//      };

//Question 9
//Ans : make it an IIFE

///Question 10
const employeeModule = (function(){
    let name = null;
    let age = null;
    let salary = null;

    const setAge = function(newAge){
        age=newAge;
    };
    const setSalary = function(newSalary){
        salary = newSalary;
    }
    const setName = function(newName){
        name = newName;
    }
    const getAge = function(){
        return age;
    }

    const getSalary = function(){
        return salary;
    }
    const getName = function(){
        return name;
    }
    const increaseSalary = function(percentage){
       my_salary= getSalary();
       salary = (my_salary * percentage)/100 + my_salary;
       return salary;
    }
    const increaseAge = function(){
      let newAge = getAge();
      setAge(newAge+1);
      return getAge();
    }
    return{
        setAge: setAge,
        setSalary: setSalary,
        setName: setName,
        increaseSalary: increaseSalary,
        increaseAge: increaseAge
    }

})();

employeeModule.setAge(60);
console.log(employeeModule.increaseAge());
employeeModule.setSalary(600);
console.log(employeeModule.increaseSalary(10));


//Question 11
employeeModule.address = "";
employeeModule.setAddress = function(addr){
 employeeModule.address  = addr;
};
employeeModule.setAddress("1000 N 4th street");
console.log(employeeModule.address);
console.log(employeeModule);


