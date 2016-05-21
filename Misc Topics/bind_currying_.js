/**
 * Created by Nischal on 5/15/2016.
 */
function greet (gender, age, name) {
    // if a male, use Mr., else use Ms.
    var salutation = gender === "male" ? "Mr. " : "Ms. ";

    if (age > 25) {
        return "Hello, " + salutation + name + ".";
    }
    else {
        return "Hey, " + name + ".";
    }
}

// So we are passing null because we are not using the "this" keyword in our greet function.
//When we use the bind () method for currying,
// all the parameters of the greet () function,
//except the last (rightmost) argument, are preset.
// So it is the rightmost argument
//that we are changing when we call the new functions that were curried from the greet () function.
var greetAnAdultMale = greet.bind (null, "male", 45);

greetAnAdultMale ("John Hartlove"); // "Hello, Mr. John Hartlove."

var greetAYoungster = greet.bind (null, "", 16);
greetAYoungster ("Alex"); // "Hey, Alex."
greetAYoungster ("Emma Waterloo"); // "Hey, Emma Waterloo."