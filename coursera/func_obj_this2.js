/**
 * Created by Nischal on 5/5/2016.
 */
// Object literals and "this"

var literalCircle = { // new Object()
    radius: 10,

    getArea: function () {
        var self = this;
        console.log(this);// will refer to literalCircle object

        var increaseRadius = function () {
            //this.radius = 20;//will point to window object
            self.radius = 20;
        };
        increaseRadius();
        console.log(this.radius);

        return Math.PI * Math.pow(this.radius, 2);
    }
};

console.log(literalCircle.getArea());