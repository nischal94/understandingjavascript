/**
 * Created by Nischal on 5/12/2016.
 */
// Create a new school object with 3 own properties: schoolName, schoolAccredited, and schoolLocation.
var school = {schoolName:"MIT", schoolAccredited: true, schoolLocation:"Massachusetts"};

//Use of the for/in loop to access the properties in the school object
for (var eachItem in school) {
    console.log(eachItem); // Prints schoolName, schoolAccredited, schoolLocation
}


// Create a new HigherLearning function that the school object will inherit from.
/* SIDE NOTE:the educationLevel property is not actually inherited by objects that use the HigherLearning constructor; instead, the educationLevel property is created as a new property on each object that uses the HigherLearning constructor. The reason the property is not inherited is because we use of the "this" keyword to define the property.
 */
function HigherLearning () {
    this.educationLevel = "University";
}

// Implement inheritance with the HigherLearning constructor
var school = new HigherLearning ();
school.schoolName = "MIT";
school.schoolAccredited = true;
school.schoolLocation = "Massachusetts";


//Use of the for/in loop to access the properties in the school object
for (var eachItem in school) {
    console.log(eachItem); // Prints educationLevel, schoolName, schoolAccredited, and schoolLocation
}