

//event handling
document.addEventListener("DOMContentLoaded",
    function (event) {

        //unobtrusive event binding
        document.querySelector("button").addEventListener("click", function () {

            var self = this;
            var name = "";

            //call server to get the name
            $ajaxUtils
                .sendGetRequest("/MyProjects2/ajax/data/name.txt",
                    function (request) {
                       var name = request.responseText;
                        document.querySelector("#content")
                            .innerHTML = "<h2>Hello" + name + "!";
            });
        });
    });