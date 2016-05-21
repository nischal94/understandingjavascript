// Define an object with some properties and a method
// We will later pass the method as a callback function to another function
var clientData = {
    id: 94545,
    fullName: "Not Set",
    // setUserName is a method on the clientData object
    setUserName: function (firstName, lastName)  {
        // this refers to the fullName property in this object
        this.fullName = firstName + " " + lastName;
    }
}

function getUserInput(firstName, lastName, callback)  {
    // Do other stuff to validate firstName/lastName here

    // Now save the names
    callback (firstName, lastName);
}

getUserInput ("Barack", "Obama", clientData.setUserName);
console.log (clientData.fullName);// Not Set
//when clientData.setUserName is executed,
//this.fullName will not set the fullName property on the clientData object.
//Instead, it will set fullName on the window object,
//since getUserInput is a global function.

// The fullName property was initialized on the window object
//console.log (window.fullName); // Barack Obama




//USING CALL OR APPLY FN. TO PRESERVE this
//Note that we have added an extra parameter
// for the callback object, called "callbackObj"
function getUserInput(firstName, lastName, callback, callbackObj)  {
    // Do other stuff to validate name here

    // The use of the Apply function below will
    // set the this object to be callbackObj.
    //This allows us to execute the callback function
    // with the this value set explicitly,
    // so the parameters passed to the callback function
    // will be set on the clientData object:
    callback.apply (callbackObj, [firstName, lastName]);
}
// We pass the clientData.setUserName method and the clientData object as parameters.
// The clientData object will be used by the Apply function
// to set the this object
getUserInput ("Barack", "Obama", clientData.setUserName, clientData);

// the fullName property on the clientData was correctly set
console.log (clientData.fullName); // Barack Obama
