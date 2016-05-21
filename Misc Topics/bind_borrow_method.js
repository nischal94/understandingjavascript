/**
 * Created by Nischal on 5/14/2016.
 */
// Here we have a cars object that does not have a method to print its data to the console
var cars = {
    data:[
        {name:"Honda Accord", age:14},
        {name:"Tesla Model S", age:2}
    ]

}
// This data variable is a global variable
var data = [
    {name:"Samantha", age:12},
    {name:"Alexis", age:14}
]

var user = {
    // local data variable
    data    :[
        {name:"T. Woods", age:37},
        {name:"P. Mickelson", age:43}
    ],
    showData:function (event) {
        var randomNum = ((Math.random () * 2 | 0) + 1) - 1; // random number between 0 and 1

        console.log (this.data[randomNum].name + " " + this.data[randomNum].age);
    }

}

// Assign the showData method of the user object to a variable
var showDataVar = user.showData;
showDataVar (); // Samantha 12 (from the global data array, not from the local data array)


// Bind the showData method to the user object
var showDataVar = user.showData.bind (user);
// Now the we get the value from the user object because the this keyword is bound to the user object
showDataVar (); // P. Mickelson 43
// We can borrow the showData () method from the user object we defined in the last example.
// Here we bind the user.showData method to the cars object we just created.
cars.showData = user.showData.bind (cars);
cars.showData (); // Honda Accord 14