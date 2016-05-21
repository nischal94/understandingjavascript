// DOM manipulation
console.log(document.getElementById("title"));
console.log(document instanceof HTMLDocument);

   document.addEventListener("DOMContentLoaded", function (event) {

        function sayHello (event)
        {
            this.textContent = "Said it";
            console.log(this);
            var name = (document.getElementById("name").value);
            var message = "<h2>hello" + " " + name + "!</h2>";
            //console.log(document.getElementsByTagName('p')[0].innerHTML.split('hello to')[1]);
            //document.getElementById("content").textContent = message;
            //document.getElementById('title').innerHTML=document.getElementById('name').value;
            //document.getElementsByTagName('p')[0].innerHTML=document.getElementById('name').value+document.getElementsByTagName('p')[0].innerHTML.split('hello to')[1];
            document.getElementById("content").innerHTML = message;

            if (name === "student") {
                //var title = document.getElementById("title")
                var title = document.querySelector("#title").textContent;
                title += "& Lovin it!";

                document.querySelector("h1").textContent = title;
                //document.querySelector("p").textContent = title;
            }
        }
//Unobtrusive event binding
        document.querySelector("button").addEventListener("click", sayHello);
//document.querySelector("button").onclick = sayHello();
}
);
