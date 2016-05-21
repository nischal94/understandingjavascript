/**
 * Created by Nischal on 5/9/2016.
 */
function makeMultiplier (multiplier) {

    function b() {
        console.log("Multiplier is:" + multiplier);
    }
    b();

    return (
        // it is not a function execution,only a function value
        // it simply gets returned to the caller
        // till we write console.log(doubleAll(10));
        function (x) {
            return multiplier * x;
        }
    )

};

var doubleAll = makeMultiplier(2);
console.log(doubleAll(10));// its own exec env