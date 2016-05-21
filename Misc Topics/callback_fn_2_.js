/**
 * Created by Nischal on 5/13/2016.
 */
// global variable
//Global variable​

//var generalLastName = "Clinton";
var allUserData = [];

// generic logStuff function that prints to console
function logStuff (userData) {
    if ( typeof userData === "string")
    {
        console.log(userData);
    }
    else if ( typeof userData === "object")
    {
        for (var item in userData) {
            console.log(item + ": " + userData[item]);
        }

    }

}

//var generalLastName = "Clinton";
// A function that takes two parameters, the last one a callback function​
function getInput (options, callback) {
    allUserData.push (options);
    callback (options);

    //Passing Parameters to Callback Functions
    //callback (generalLastName,options);
}

// When we call the getInput function, we pass logStuff as a parameter.
// So logStuff will be the function that will called back (or executed) inside the getInput function​
getInput ({name:"Rich", speciality:"JavaScript"}, logStuff);
//  name: Rich
// speciality: JavaScript