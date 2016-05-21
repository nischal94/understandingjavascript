/**
 * Created by Nischal on 5/12/2016.
 */

// The use of the "this" object inside the setTimeout function refers to the Window object, not to myObj​

var highValue = 200;
var constantVal = 2;
var myObj = {
    highValue: 20,
    constantVal: 5,
    calculateIt: function () {
        setTimeout (function  () {
            console.log(this.constantVal * this.highValue);
        }, 2000);
    }
}

// The "this" object in the setTimeout function used the global highValue and constantVal variables, because the reference to "this" in the setTimeout function refers to the global window object, not to the myObj object as we might expect.

myObj.calculateIt(); // 400
// This is an important point to remember.