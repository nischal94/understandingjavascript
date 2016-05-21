/**
 * Created by Nischal on 5/9/2016.
 */
var message = "in global";
console.log("global: message = " + message);

var a = function () {
    var message = "inside a";
    console.log("a: message = " + message);
    b();
}

// outer scope of fn. b is the global scope
function b () {
    console.log("b: message = " + message)
}
a();