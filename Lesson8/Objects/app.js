const address={
street: "1000 N 4th street",
city: "Fairfield",
state:"IA",
zipCode:"52557-0001",
"house number": 1000

};
console.log(`Street is ${address.street}`);
console.log(`House Number is ${address["house number"]}`);

/**const person={
    firstName:"Anna",
    lastName:"Smith",
    home_address:{
      street:  "South Court Street",
      city: "Fairfield"
},
work_address: address,
printFullName: function(){
    console.log(`${this.firstName} ${this.lastName}`);
}

};
console.log(`Person is named ${person.lastName}`);
console.log(`She lives on a street name ${person.home_address.street}`)
console.log(`${person.firstName} works at ${person.work_address.street}`)
person.printFullName();*/

//person can be replaced by annna since person referes to literal object
const anna={
    firstName:"Anna",
    lastName:"Smith",
    home_address:{
      street:  "South Court Street",
      city: "Fairfield"
},
work_address: address,
printFullName: function(){
    console.log(`${this.firstName} ${this.lastName}`);
}

};
console.log(`Person is named ${anna.lastName}`);
console.log(`She lives on a street name ${anna.home_address.street}`)
console.log(`${anna.firstName} works at ${anna.work_address.street}`)
anna.printFullName();

//Adding new property for anna object 
anna.dateOfBirth=new Date(1975,11,12);
console.log(`${anna.firstName} was born on ${anna.dateOfBirth}`);
for(const prop in anna){
    console.log(anna.prop)
}
//constructor function--we see this later