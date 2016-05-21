/**
 * Created by Nischal on 5/13/2016.
 */

//note the way we pass an anonymous function
// (a function without a name) to the forEach method
// as a parameter.

var friends = ["Mike", "Stacy", "Andy", "Rick"];

friends.forEach(function (eachName, index){
    console.log(index + 1 + ". " + eachName); // 1. Mike, 2. Stacy, 3. Andy, 4. Rick
});