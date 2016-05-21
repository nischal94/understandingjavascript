/**
 * Created by Nischal on 5/10/2016.
 */

function change(objValue) {
    console.log("before:");
    console.log(objValue);

    objValue.x = 5;
    console.log("after:");
    console.log(objValue);
}

value = { x:7 };
change(value); // objValue = value
console.log("after change, orig value:");
console.log(value);