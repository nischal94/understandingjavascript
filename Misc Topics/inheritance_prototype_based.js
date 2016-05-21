/**
 * Created by Nischal on 5/13/2016.
 */

//1.Prototype Property: Prototype-based Inheritance

function Plant () {
    this.country = "Mexico";
    this.isOrganic = true;
}

// Add the showNameAndColor method to the Plant prototype property
Plant.prototype = {
    showNameAndColor:function() {
        console.log("I am " + this.name + "and my color is " + this.color);
    },
    amIOrganic:function() {
        if (this.isOrganic) {
            console.log("I am organic baby!");
        }
    }
};

function Fruit (fruitName, fruitColor) {
    this.name = fruitName;
    this.color = fruitColor;

    //remove comments to this function to test function overriding.
    /*this.amIOrganic = function (){
     console.log(“I am not organic, baby”);
     };*/
}

// Set the Fruit's prototype to Plant's constructor, thus inheriting all of Plant.prototype methods and properties.
Fruit.prototype = new Plant ();

// Creates a new object, aBanana, with the Fruit constructor
var aBanana = new Fruit ("Banana", "Yellow");

// Here, aBanana uses the name property from the aBanana object prototype, which is Fruit.prototype:
console.log(aBanana.name); // Banana

// Uses the showNameAndColor method from the Fruit object prototype, which is Plant.prototype. The aBanana object inherits all the properties and methods from both the Plant and Fruit functions.
console.log(aBanana.showNameAndColor()); // I am a Banana and my color is yellow.
//console.log(aBanana.amIOrganic());