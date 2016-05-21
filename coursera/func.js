/**
 * Created by Nischal on 5/10/2016.
 */
function multiply(x,y) {
    return x*y;
}
multiply.version = "v1.0";

//Function factory
function makeMultiplier(multiplier) {
    var myFunc = function(x) {
      return multiplier * x;
    };
    return myFunc;
}

var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));//30


//Passing functions as arguments
function doOperationOn(x, operation) {
    return operation(x);
}

var result = doOperationOn(5, multiplyBy3);
console.log(result);// 15
result = doOperationOn(100, multiplyBy3);
console.log(result);// 300
