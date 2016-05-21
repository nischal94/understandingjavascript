
//Immediately-Invoked Function Expression (IIFE)
(function (global) {
        var ajaxUtils = {};

        //Returns an HTTP request object
        function getRequestObject() {
            if (window.XMLHttpRequest) {
                return (new XMLHttpRequest());
            }
            else {
                global.alert("Ajax is not supported");
                return (null);
            }

        }



    //Makes an Ajax GET request to 'requestUrl'
ajaxUtils.sendGetRequest = function(requestUrl, responseHandler, isJsonResponse) {
    var request = getRequestObject();
    request.onreadystatechange =
        function () {
            handleResponse(request, responseHandler, isJsonResponse);
        };
    request.open("GET", requestUrl, true);
    request.send(null);// for POST only
};

     //only calls user provided 'responseHandler'
    //function if response is ready
   //and not an error

  function handleResponse(request, responseHandler) {

      if ((request.readyState == 4) &&
          (request.status == 200)) {
          //responseHandler(request);

          // Default to isJsonResponse = true
          if (isJsonResponse == undefined) {
              isJsonResponse = true;
          }

          if (isJsonResponse) {
              responseHandler(JSON.parse(request.responseText))

          }
          else {
              responseHandler(request.responseText);
          }
      }
  }

//expose utility to the global object
global.$ajaxUtils = ajaxUtils;

})(window);