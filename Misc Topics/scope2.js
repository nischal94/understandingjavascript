/**
 * Created by Nischal on 5/12/2016.
 */
function showAge () {
    // Age is a global variable because it was not declared with the var keyword inside this function
    age = 90;
    console.log(age);
}

showAge (); // 90

// Age is in the global context, so it is available here, too
console.log(age);