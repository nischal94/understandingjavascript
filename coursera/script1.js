
function change_color1(){
    document.childNodes[1].childNodes[1].childNodes[1]
        .style.color="red";

}
function change_color2(){
    document.getElementsByTagName("h2")[0].style.color
        ="yellow";
}
function change_color3(){
    //document.getElementById("cute_text").style.color="blue";
    document.getElementById("cute_text")
        .setAttribute("style", "color:blue");
}




