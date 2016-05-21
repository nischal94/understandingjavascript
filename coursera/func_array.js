/**
 * Created by Nischal on 5/5/2016.
 */
/*
var array = new Array();
array[0] = "Nischal";
array[1] = 2;
array[2] = function (name) {
console.log("hello" + name);
};
array[3] = {course: " Html,css and Js"};
console.log(array);
console.log(array[1]);
array[2](array[0]);
console.log(array[3].course);*/


//Short hand array creation
/*var names = [
 {name: "nischal"},
 {name: "archit"},
 "ankit"];*/

var names = ["nischal", "archit", "ankit"];
//console.log(names);

for (var i = 0; i < names.length; i++)
{
    console.log("hello" + " " + names[i]);
}

names[100] = "Jim";
for (var i = 0; i < names.length; i++)
{
    console.log("hello" + " " + names[i]);
}
