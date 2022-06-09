/**W2D3 – Homework Assignment 9 – Using Inheritance
Implement code solutions for the following and be sure to use "use strict":
 */


/**1.	Define a JavaScript object literal named, person, with the following specification:
a.	Person object should have the properties:
i.	name (initialize this with empty string value)
ii.	dateOfBirth (initialize this with empty string value or null)
b.	Person object should have the methods:
i.	getName (should return the value of the person’s name property)
ii.	setName (should take as input parameter, a String value which it sets as the person’s name) 

Given that someone named John IS-A person, applying JavaScript inheritance and the Object.create(…) method, create an object named, john, whose name property is set to the string, “John” and whose dateOfBirth property is set to the date, December 10th, 1998.

Print-out to the console, the information about the person named John, in the following format:
“The person’s name is John”
“John was born on 1998-12-10”
 */
const person={
    name:"",
    dateOfBirth:"",
    getName:function(){
        return this.name;
    },
    setName: function(name){
        this.name=name;
    }
};

const personJohn=Object.create(person,{
    name:{
        value:"John",
        enumerable: true
    },
    dateOfBirth:{
        value: new Date(1998,11,10)
    }
        
});

/**2.	Given that an Employee IS-A person, applying JavaScript inheritance and the Object.create(…) method, create a generic object named, employee, with the following properties:
a.	Salary (initialize this with the value zero dollars
b.	hireDate (initialize this with the current date of today)
and the following method:
c.	doJob (should take as input parameter, a string representing the jobTitle of the employee and it prints-out to the console, the employee’s information in the following format:

“[Employee’s name] is a [jobTitle] who earns $[salary]”
e.g. Anna is a Programmer who earns $249,995.50 

Create an employee named, Anna, set their salary to $249.995.50 and call the doJob() method, passing it the jobtitle, Programmer.
 */
const employee=Object.create(person,{
    salary: {value: 0},
    hireDate: {value: function(jobTitle){
        console.log(`${this.name} is a ${jobTitle} who earns ${this.salary}`)
    }}

});

//Other options-1
/**const employee = {
    salary: 0,
    hireDate: new Date(),
    doJob: function(jobTitle){
        console.log(` ${this.name} is a ${jobTitle} who earns $${this.salary}`);
    }
}*/

//Option2-using .prototype.That is to create employee IS A perosn relationship using ES6
//employee.prototype=person;

/**Option3: //To create employee IS A person using setPrototypeOf, 
This method also sets every previously created employee to have the new created one */
Object.setPrototypeOf(employee,person);
console.log(employee);
const employeeAnna=Object.create(employee,{
    name:{value: "Anna"},
});
employeeAnna.salary="249,995.00";
employeeAnna.doJob("Programmer");

/**3.	Re-write the person object specification described in Question 1 above, but this time, using a Constructor Function named, Person. Then, add a method named, toString() to the person object, which return the string representation of the person object data in the format:

{Name: John, DateOfBirth: 1998-12-10}

Using your constructor function for the person object, create a person named, Peter, whose date of birth is November 10, 1985.

Print-out to the console, the information for the person named, Peter, using its toString() method. 

Please submit your code as a single zip file attachment to Sakai and/or push it to your github repository.
 */


function Person(name,dob){
    this.name=name;
    this.dateOfBirth=dob;
};

//toString
Person.prototype.toString=function(){
    return`{Name:$this.name},DateOfBirth:${this.dateOfBirth}`;
};
const personPeter=new person("Peter", new Date(1985,10,10));
console.log(person.toString());