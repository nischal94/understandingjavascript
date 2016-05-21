var person = {name: "Kobe"};
var anotherPerson = person;
person.name = "Bryant";

console.log(anotherPerson.name); // Bryant
console.log(person.name); // Bryant
//In this example, we copied the person object to anotherPerson,
// but because the value in person was stored as a reference and not an actual value,
// when we changed the person.name property to “Bryant”
// the anotherPerson reflected the change
// because it never stored an actual copy of it’s own value of the person’s properties,
// it only had a reference to it.


//CALL BY VALUE
//var person = {name: "Kobe"};
/*
var person = "kobe";
var anotherPerson = person;
person = "Bryant";

console.log(anotherPerson); // Kobe
console.log(person); // Bryant*/
