/**
 * Created by Nischal on 5/5/2016.
 */

function test() {
    //console.log(this);// will return global window object
    this.myName = "Nischal";
}
test();
//console.log(window.myName);//will print Nischal


//Function constructors- to encapsulate data within an object
function Circle (radius) {
    //console.log(this);
    this.radius = radius;//radius is stored as property of object
}
/*
this.getArea =
    function() {
        return Math.PI * Math.pow(this.radius, 2);
    };*/

//so property need to be created only once
Circle.prototype.getArea = function () {
    return Math.PI * Math.pow(this.radius, 2);
};

var myCircle = new Circle(10);//JS engine makes 'this' point to object itself that was created
console.log(myCircle.getArea());//Circle {}- empty object of type Circle before we write this.radius = radius;

var myOtherCircle = new Circle(20);
console.log(myOtherCircle);